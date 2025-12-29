import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabs";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";
import { CheeseEntity } from "../types/database";
import { CHEESES, ATTRIBUTES } from "../lib/database";
import {
  Search,
  Plus,
  Edit,
  Download,
  Copy,
  Check,
  X,
  Lock,
  LogOut,
} from "lucide-react";

// Password hash - you can change this by running: btoa('your-password')
const PASSWORD_HASH = "c2hlcmJldC1sYW5jYXN0ZXI=";



interface CheeseFormData extends Partial<CheeseEntity> {
  firmness?: number;
  meltability?: number;
  funkiness?: number;
  availability?: number;
  flavorTags: number[];
  useTags: number[];
  inclusionTags: number[];
}

function PasswordGate({ onAuthenticated }: { onAuthenticated: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (btoa(password) === PASSWORD_HASH) {
      onAuthenticated();
      setError(false);
    } else {
      setError(true);
      setPassword("");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center text-dark-orange">
          <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-primary/10">
            <Lock className="size-8 text-primary" />
          </div>
          <CardTitle>Cheese Database Admin</CardTitle>
          <CardDescription>
            Enter password to access the admin panel
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className={error ? "border-red-500" : ""}
                autoFocus
              />
              {error && (
                <p className="mt-2 text-sm text-red-500">
                  Incorrect password. Please try again.
                </p>
              )}
            </div>
            <Button type="submit" className="w-full">
              Access Admin Panel
            </Button>
          </form>
          <div className="mt-6 rounded-lg bg-muted p-3">
            <p className="text-xs text-muted-foreground">
              <strong>Note:</strong> To change the password, edit the PASSWORD_HASH 
              constant in /components/CheeseAdmin.tsx
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function CheeseAdmin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check localStorage for saved session
  useEffect(() => {
    const savedAuth = localStorage.getItem('cheese-admin-auth');
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleAuthenticated = () => {
    setIsAuthenticated(true);
    localStorage.setItem('cheese-admin-auth', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('cheese-admin-auth');
  };

  // Show password gate if not authenticated
  if (!isAuthenticated) {
    return <PasswordGate onAuthenticated={handleAuthenticated} />;
  }

  return <CheeseAdminPanel onLogout={handleLogout} />;
}

function CheeseAdminPanel({ onLogout }: { onLogout: () => void }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCheese, setSelectedCheese] =
    useState<CheeseEntity | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState<CheeseFormData>({
    flavorTags: [],
    useTags: [],
    inclusionTags: [],
  });
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  // Get attribute options
  const firmnessOptions = ATTRIBUTES.filter(
    (a) => a.Attribute_Type === "Firmness",
  );
  const meltabilityOptions = ATTRIBUTES.filter(
    (a) => a.Attribute_Type === "Meltability",
  );
  const funkinessOptions = ATTRIBUTES.filter(
    (a) => a.Attribute_Type === "Funkiness",
  );
  const availabilityOptions = ATTRIBUTES.filter(
    (a) => a.Attribute_Type === "Availability",
  );
  const flavorOptions = ATTRIBUTES.filter(
    (a) => a.Attribute_Type === "Flavor",
  );
  const useOptions = ATTRIBUTES.filter(
    (a) => a.Attribute_Type === "Use",
  );
  const inclusionOptions = ATTRIBUTES.filter(
    (a) => a.Attribute_Type === "Inclusion",
  );

  const filteredCheeses = CHEESES.filter(
    (cheese) =>
      cheese.Name.toLowerCase().includes(
        searchTerm.toLowerCase(),
      ) ||
      cheese.Origin_Country.toLowerCase().includes(
        searchTerm.toLowerCase(),
      ),
  );

  const handleSelectCheese = (cheese: CheeseEntity) => {
    setSelectedCheese(cheese);
    setFormData({
      ...cheese,
      flavorTags: [],
      useTags: [],
      inclusionTags: [],
    });
    setEditMode(false);
    setShowCode(false);
  };

  const handleNewCheese = () => {
    const newId =
      Math.max(...CHEESES.map((c) => c.Cheese_ID)) + 1;
    setSelectedCheese(null);
    setFormData({
      Cheese_ID: newId,
      Name: "",
      Description: "",
      Milk_Type: "Cow",
      Origin_Country: "",
      Rind_Type: "None",
      Texture: "semi-soft",
      FlavorBySource: "",
      Is_A2: false,
      flavorTags: [],
      useTags: [],
      inclusionTags: [],
    });
    setEditMode(true);
    setShowCode(false);
  };

  const toggleTag = (
    tagId: number,
    tagType: "flavorTags" | "useTags" | "inclusionTags",
  ) => {
    const currentTags = formData[tagType] || [];
    const newTags = currentTags.includes(tagId)
      ? currentTags.filter((id) => id !== tagId)
      : [...currentTags, tagId];
    setFormData({ ...formData, [tagType]: newTags });
  };

  const generateCode = () => {
    const isNew = !selectedCheese;
    const cheeseId = formData.Cheese_ID!;

    // Generate cheese entity code
    const cheeseCode = `  { Cheese_ID: ${cheeseId}, Name: '${formData.Name}', Description: '${formData.Description?.replace(/'/g, "\\'")}', Milk_Type: '${formData.Milk_Type}', Origin_Country: '${formData.Origin_Country}', Rind_Type: '${formData.Rind_Type}', Texture: '${formData.Texture}', FlavorBySource: '${formData.FlavorBySource?.replace(/'/g, "\\'")}\'${formData.Is_A2 ? ", Is_A2: true" : ""} },`;

    // Generate attribute mappings
    const mappings: string[] = [];
    let mappingId = 99999; // Temporary ID - user will need to adjust

    if (formData.firmness) {
      mappings.push(
        `  { Mapping_ID: ${mappingId++}, Cheese_ID: ${cheeseId}, Attribute_ID: ${formData.firmness} },`,
      );
    }
    if (formData.meltability) {
      mappings.push(
        `  { Mapping_ID: ${mappingId++}, Cheese_ID: ${cheeseId}, Attribute_ID: ${formData.meltability} },`,
      );
    }
    if (formData.funkiness) {
      mappings.push(
        `  { Mapping_ID: ${mappingId++}, Cheese_ID: ${cheeseId}, Attribute_ID: ${formData.funkiness} },`,
      );
    }
    if (formData.availability) {
      mappings.push(
        `  { Mapping_ID: ${mappingId++}, Cheese_ID: ${cheeseId}, Attribute_ID: ${formData.availability} },`,
      );
    }

    formData.flavorTags.forEach((tagId) => {
      mappings.push(
        `  { Mapping_ID: ${mappingId++}, Cheese_ID: ${cheeseId}, Attribute_ID: ${tagId} },`,
      );
    });

    formData.useTags.forEach((tagId) => {
      mappings.push(
        `  { Mapping_ID: ${mappingId++}, Cheese_ID: ${cheeseId}, Attribute_ID: ${tagId} },`,
      );
    });

    formData.inclusionTags.forEach((tagId) => {
      mappings.push(
        `  { Mapping_ID: ${mappingId++}, Cheese_ID: ${cheeseId}, Attribute_ID: ${tagId} },`,
      );
    });

    const attributeCode =
      mappings.length > 0
        ? `\n// Attribute mappings for ${formData.Name} (${cheeseId}):\n${mappings.join("\n")}`
        : "";

    return {
      cheese: cheeseCode,
      attributes: attributeCode,
      isNew,
    };
  };

  const handleSave = () => {
    setShowCode(true);
    setEditMode(false);
  };

  const handleCopyCode = () => {
    const { cheese, attributes } = generateCode();
    const fullCode = `// Add this cheese to the CHEESES array in /lib/database.ts:\n${cheese}\n${attributes}`;
    navigator.clipboard.writeText(fullCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExportJSON = () => {
    const dataStr = JSON.stringify(CHEESES, null, 2);
    const dataBlob = new Blob([dataStr], {
      type: "application/json",
    });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "cheeses-export.json";
    link.click();
  };

  const handleExportCSV = () => {
    const headers = [
      "Cheese_ID",
      "Name",
      "Description",
      "Milk_Type",
      "Origin_Country",
      "Rind_Type",
      "Texture",
      "FlavorBySource",
      "Is_A2",
    ];
    const rows = CHEESES.map((cheese) => [
      cheese.Cheese_ID,
      `"${cheese.Name}"`,
      `"${cheese.Description.replace(/"/g, '""')}"`,
      cheese.Milk_Type,
      cheese.Origin_Country,
      cheese.Rind_Type,
      cheese.Texture,
      `"${cheese.FlavorBySource.replace(/"/g, '""')}"`,
      cheese.Is_A2 ? "true" : "false",
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((r) => r.join(",")),
    ].join("\n");
    const dataBlob = new Blob([csvContent], {
      type: "text/csv",
    });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "cheeses-export.csv";
    link.click();
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="mb-2 text-magenta">Cheese Database Admin</h1>
            <p className="text-muted-foreground">
              Manage your cheese collection ({CHEESES.length}{" "}
              cheeses)
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={handleExportJSON}
              variant="outline"
              size="sm"
            >
              <Download className="mr-2 size-4" />
              Export JSON
            </Button>
            <Button
              onClick={handleExportCSV}
              variant="outline"
              size="sm"
            >
              <Download className="mr-2 size-4" />
              Export CSV
            </Button>
            <Button onClick={handleNewCheese} size="sm">
              <Plus className="mr-2 size-4" />
              New Cheese
            </Button>
            <Button
              onClick={onLogout}
              variant="outline"
              size="sm"
            >
              <LogOut className="mr-2 size-4" />
              Logout
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left Panel - Cheese List */}
          <Card className="lg:col-span-1 text-dark-orange">
            <CardHeader>
              <CardTitle>All Cheeses</CardTitle>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search cheeses..."
                  value={searchTerm}
                  onChange={(e) =>
                    setSearchTerm(e.target.value)
                  }
                  className="pl-9"
                />
              </div>
            </CardHeader>
            <CardContent className="max-h-[600px] overflow-y-auto">
              <div className="space-y-2">
                {filteredCheeses.map((cheese) => (
                  <button
                    key={cheese.Cheese_ID}
                    onClick={() => handleSelectCheese(cheese)}
                    className={`w-full rounded-lg border p-3 text-left transition-colors hover:bg-muted ${
                      selectedCheese?.Cheese_ID ===
                      cheese.Cheese_ID
                        ? "border-primary bg-muted"
                        : ""
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-base font-medium">
                        {cheese.Name}
                      </div>
                      {cheese.Is_A2 && (
                        <Badge
                          variant="secondary"
                          className="text-xs"
                        >
                          A2
                        </Badge>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {cheese.Origin_Country} ·{" "}
                      {cheese.Milk_Type}
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Right Panel - Cheese Details/Edit */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between text-dark-orange ">
                <CardTitle>
                  {editMode
                    ? selectedCheese
                      ? "Edit Cheese"
                      : "New Cheese"
                    : selectedCheese
                      ? selectedCheese.Name
                      : "Select a Cheese"}
                </CardTitle>
                {selectedCheese && !editMode && !showCode && (
                  <Button
                    onClick={() => setEditMode(true)}
                    size="sm"
                    variant="outline"
                  >
                    <Edit className="mr-2 size-4" />
                    Edit
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              {formData && (
                <Tabs defaultValue="basic" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="basic">
                      Basic Info
                    </TabsTrigger>
                    <TabsTrigger value="attributes">
                      Attributes
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent
                    value="basic"
                    className="space-y-4"
                  >
                    <div className="grid gap-4">
                      <div>
                        <Label htmlFor="name">
                          Cheese Name
                        </Label>
                        <Input
                          id="name"
                          value={formData.Name || ""}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              Name: e.target.value,
                            })
                          }
                          disabled={!editMode}
                          placeholder="e.g., Aged Cheddar"
                        />
                      </div>

                      <div>
                        <Label htmlFor="description">
                          Description
                        </Label>
                        <Textarea
                          id="description"
                          value={formData.Description || ""}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              Description: e.target.value,
                            })
                          }
                          disabled={!editMode}
                          rows={3}
                          placeholder="Describe the cheese's taste, texture, and characteristics"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="milk">
                            Milk Type
                          </Label>
                          <Select
                            value={formData.Milk_Type || "Cow"}
                            onValueChange={(value) =>
                              setFormData({
                                ...formData,
                                Milk_Type: value,
                              })
                            }
                            disabled={!editMode}
                          >
                            <SelectTrigger id="milk">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Cow">
                                Cow
                              </SelectItem>
                              <SelectItem value="Sheep">
                                Sheep
                              </SelectItem>
                              <SelectItem value="Goat">
                                Goat
                              </SelectItem>
                              <SelectItem value="Buffalo">
                                Buffalo
                              </SelectItem>
                              <SelectItem value="Mixed">
                                Mixed
                              </SelectItem>
                              <SelectItem value="Yak">
                                Yak
                              </SelectItem>
                              <SelectItem value="Camel">
                                Camel
                              </SelectItem>
                              <SelectItem value="Reindeer">
                                Reindeer
                              </SelectItem>
                              <SelectItem value="Moose">
                                Moose
                              </SelectItem>
                              <SelectItem value="Donkey">
                                Donkey
                              </SelectItem>
                              <SelectItem value="Horse">
                                Horse
                              </SelectItem>
                              <SelectItem value="Zebu">
                                Zebu
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="origin">
                            Origin Country
                          </Label>
                          <Input
                            id="origin"
                            value={
                              formData.Origin_Country || ""
                            }
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                Origin_Country: e.target.value,
                              })
                            }
                            disabled={!editMode}
                            placeholder="e.g., France"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="rind">
                            Rind Type
                          </Label>
                          <Select
                            value={formData.Rind_Type || "None"}
                            onValueChange={(value) =>
                              setFormData({
                                ...formData,
                                Rind_Type: value,
                              })
                            }
                            disabled={!editMode}
                          >
                            <SelectTrigger id="rind">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="None">
                                None
                              </SelectItem>
                              <SelectItem value="Natural">
                                Natural
                              </SelectItem>
                              <SelectItem value="Bloomy">
                                Bloomy
                              </SelectItem>
                              <SelectItem value="Washed">
                                Washed
                              </SelectItem>
                              <SelectItem value="Waxed">
                                Waxed
                              </SelectItem>
                              <SelectItem value="Wax">
                                Wax
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="texture">
                            Texture
                          </Label>
                          <Select
                            value={
                              formData.Texture || "semi-soft"
                            }
                            onValueChange={(value) =>
                              setFormData({
                                ...formData,
                                Texture: value,
                              })
                            }
                            disabled={!editMode}
                          >
                            <SelectTrigger id="texture">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="soft">
                                Soft
                              </SelectItem>
                              <SelectItem value="semi-soft">
                                Semi-Soft
                              </SelectItem>
                              <SelectItem value="semi-hard">
                                Semi-Hard
                              </SelectItem>
                              <SelectItem value="hard">
                                Hard
                              </SelectItem>
                              <SelectItem value="firm">
                                Firm
                              </SelectItem>
                              <SelectItem value="crumbly">
                                Crumbly
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="flavor">
                          Flavor by Source
                        </Label>
                        <Textarea
                          id="flavor"
                          value={formData.FlavorBySource || ""}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              FlavorBySource: e.target.value,
                            })
                          }
                          disabled={!editMode}
                          rows={2}
                          placeholder="e.g., Cow: Buttery milk develops sharp complexity through aging"
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="a2"
                          checked={formData.Is_A2 || false}
                          onCheckedChange={(checked) =>
                            setFormData({
                              ...formData,
                              Is_A2: checked as boolean,
                            })
                          }
                          disabled={!editMode}
                        />
                        <Label
                          htmlFor="a2"
                          className="cursor-pointer"
                        >
                          A2 Cow Milk Cheese (eligible for Beast
                          track)
                        </Label>
                      </div>
                    </div>

                    {editMode && (
                      <div className="flex justify-end gap-2 pt-4">
                        <Button
                          onClick={() => {
                            setEditMode(false);
                            setShowCode(false);
                            if (selectedCheese) {
                              setFormData({
                                ...selectedCheese,
                                flavorTags: [],
                                useTags: [],
                                inclusionTags: [],
                              });
                            }
                          }}
                          variant="outline"
                        >
                          Cancel
                        </Button>
                        <Button onClick={handleSave}>
                          Generate Code
                        </Button>
                      </div>
                    )}

                    {showCode && (
                      <Card className="mt-4 border-primary">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-base">
                              Generated Code
                            </CardTitle>
                            <Button
                              onClick={handleCopyCode}
                              size="sm"
                              variant="outline"
                            >
                              {copied ? (
                                <>
                                  <Check className="mr-2 size-4" />
                                  Copied!
                                </>
                              ) : (
                                <>
                                  <Copy className="mr-2 size-4" />
                                  Copy
                                </>
                              )}
                            </Button>
                          </div>
                          <CardDescription>
                            {generateCode().isNew
                              ? "Add this code to the CHEESES array in /lib/database.ts"
                              : "Replace the existing entry in /lib/database.ts with this code"}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-xs">
                            <code>{generateCode().cheese}</code>
                            {generateCode().attributes && (
                              <code>
                                {generateCode().attributes}
                              </code>
                            )}
                          </pre>
                          <div className="mt-4 flex items-start gap-2 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950/20">
                            <div className="text-sm">
                              <p className="font-medium">
                                Next Steps:
                              </p>
                              <ol className="ml-4 mt-2 list-decimal space-y-1">
                                <li>Copy the code above</li>
                                <li>Open /lib/database.ts</li>
                                <li>
                                  {generateCode().isNew
                                    ? "Add the cheese entry to the CHEESES array"
                                    : "Find and replace the existing cheese entry"}
                                </li>
                                <li>
                                  Add attribute mappings to
                                  CHEESE_ATTRIBUTE_MAPPINGS
                                  array
                                </li>
                                <li>
                                  Update Mapping_IDs to be
                                  sequential
                                </li>
                                <li>
                                  Save the file and reload the
                                  app
                                </li>
                              </ol>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </TabsContent>

                  <TabsContent
                    value="attributes"
                    className="space-y-4"
                  >
                    <div className="space-y-6">
                      {/* Firmness */}
                      <div>
                        <Label>Firmness</Label>
                        <Select
                          value={
                            formData.firmness?.toString() || ""
                          }
                          onValueChange={(value) =>
                            setFormData({
                              ...formData,
                              firmness: parseInt(value),
                            })
                          }
                          disabled={!editMode}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select firmness..." />
                          </SelectTrigger>
                          <SelectContent>
                            {firmnessOptions.map((opt) => (
                              <SelectItem
                                key={opt.Attribute_ID}
                                value={opt.Attribute_ID.toString()}
                              >
                                {opt.Attribute_Value} (
                                {opt.NumericValue})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Meltability */}
                      <div>
                        <Label>Meltability</Label>
                        <Select
                          value={
                            formData.meltability?.toString() ||
                            ""
                          }
                          onValueChange={(value) =>
                            setFormData({
                              ...formData,
                              meltability: parseInt(value),
                            })
                          }
                          disabled={!editMode}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select meltability..." />
                          </SelectTrigger>
                          <SelectContent>
                            {meltabilityOptions.map((opt) => (
                              <SelectItem
                                key={opt.Attribute_ID}
                                value={opt.Attribute_ID.toString()}
                              >
                                {opt.Attribute_Value} (
                                {opt.NumericValue})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Funkiness */}
                      <div>
                        <Label>Funkiness</Label>
                        <Select
                          value={
                            formData.funkiness?.toString() || ""
                          }
                          onValueChange={(value) =>
                            setFormData({
                              ...formData,
                              funkiness: parseInt(value),
                            })
                          }
                          disabled={!editMode}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select funkiness..." />
                          </SelectTrigger>
                          <SelectContent>
                            {funkinessOptions.map((opt) => (
                              <SelectItem
                                key={opt.Attribute_ID}
                                value={opt.Attribute_ID.toString()}
                              >
                                {opt.Attribute_Value} (
                                {opt.NumericValue})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Availability */}
                      <div>
                        <Label>Availability</Label>
                        <Select
                          value={
                            formData.availability?.toString() ||
                            ""
                          }
                          onValueChange={(value) =>
                            setFormData({
                              ...formData,
                              availability: parseInt(value),
                            })
                          }
                          disabled={!editMode}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select availability..." />
                          </SelectTrigger>
                          <SelectContent>
                            {availabilityOptions.map((opt) => (
                              <SelectItem
                                key={opt.Attribute_ID}
                                value={opt.Attribute_ID.toString()}
                              >
                                {opt.Attribute_Value}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Flavor Tags */}
                      <div>
                        <Label>Flavor Tags</Label>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {flavorOptions.map((opt) => (
                            <Badge
                              key={opt.Attribute_ID}
                              variant={
                                formData.flavorTags.includes(
                                  opt.Attribute_ID,
                                )
                                  ? "default"
                                  : "outline"
                              }
                              className={
                                editMode ? "cursor-pointer" : ""
                              }
                              onClick={() =>
                                editMode &&
                                toggleTag(
                                  opt.Attribute_ID,
                                  "flavorTags",
                                )
                              }
                            >
                              {opt.Attribute_Value}
                              {formData.flavorTags.includes(
                                opt.Attribute_ID,
                              ) &&
                                editMode && (
                                  <X className="ml-1 size-3" />
                                )}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Use Tags */}
                      <div>
                        <Label>Use Cases</Label>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {useOptions.map((opt) => (
                            <Badge
                              key={opt.Attribute_ID}
                              variant={
                                formData.useTags.includes(
                                  opt.Attribute_ID,
                                )
                                  ? "secondary"
                                  : "outline"
                              }
                              className={
                                editMode ? "cursor-pointer" : ""
                              }
                              onClick={() =>
                                editMode &&
                                toggleTag(
                                  opt.Attribute_ID,
                                  "useTags",
                                )
                              }
                            >
                              {opt.Attribute_Value}
                              {formData.useTags.includes(
                                opt.Attribute_ID,
                              ) &&
                                editMode && (
                                  <X className="ml-1 size-3" />
                                )}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Inclusion Tags */}
                      <div>
                        <Label>Inclusions (if any)</Label>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {inclusionOptions.map((opt) => (
                            <Badge
                              key={opt.Attribute_ID}
                              variant={
                                formData.inclusionTags.includes(
                                  opt.Attribute_ID,
                                )
                                  ? "default"
                                  : "outline"
                              }
                              className={
                                editMode ? "cursor-pointer" : ""
                              }
                              onClick={() =>
                                editMode &&
                                toggleTag(
                                  opt.Attribute_ID,
                                  "inclusionTags",
                                )
                              }
                            >
                              {opt.Attribute_Value}
                              {formData.inclusionTags.includes(
                                opt.Attribute_ID,
                              ) &&
                                editMode && (
                                  <X className="ml-1 size-3" />
                                )}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {editMode && (
                      <div className="flex justify-end gap-2 pt-4">
                        <Button
                          onClick={() => {
                            setEditMode(false);
                            setShowCode(false);
                            if (selectedCheese) {
                              setFormData({
                                ...selectedCheese,
                                flavorTags: [],
                                useTags: [],
                                inclusionTags: [],
                              });
                            }
                          }}
                          variant="outline"
                        >
                          Cancel
                        </Button>
                        <Button onClick={handleSave}>
                          Generate Code
                        </Button>
                      </div>
                    )}

                    {showCode && (
                      <Card className="border-primary">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-base">
                              Generated Code
                            </CardTitle>
                            <Button
                              onClick={handleCopyCode}
                              size="sm"
                              variant="outline"
                            >
                              {copied ? (
                                <>
                                  <Check className="mr-2 size-4" />
                                  Copied!
                                </>
                              ) : (
                                <>
                                  <Copy className="mr-2 size-4" />
                                  Copy
                                </>
                              )}
                            </Button>
                          </div>
                          <CardDescription>
                            Copy this code and paste it into
                            /lib/database.ts
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-xs">
                            <code>{generateCode().cheese}</code>
                            {generateCode().attributes && (
                              <code>
                                {generateCode().attributes}
                              </code>
                            )}
                          </pre>
                        </CardContent>
                      </Card>
                    )}
                  </TabsContent>
                </Tabs>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}