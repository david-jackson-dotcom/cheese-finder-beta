import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { CheeseEntity } from '../types/database';
import { CHEESES } from '../lib/database';
import { Search, Plus, Edit, Download, Upload } from 'lucide-react';

export function CheeseAdmin() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCheese, setSelectedCheese] = useState<CheeseEntity | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState<Partial<CheeseEntity>>({});

  const filteredCheeses = CHEESES.filter(cheese =>
    cheese.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cheese.Origin_Country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectCheese = (cheese: CheeseEntity) => {
    setSelectedCheese(cheese);
    setFormData(cheese);
    setEditMode(false);
  };

  const handleNewCheese = () => {
    const newId = Math.max(...CHEESES.map(c => c.Cheese_ID)) + 1;
    setSelectedCheese(null);
    setFormData({
      Cheese_ID: newId,
      Name: '',
      Description: '',
      Milk_Type: 'Cow',
      Origin_Country: '',
      Rind_Type: 'None',
      Texture: 'semi-soft',
      FlavorBySource: '',
    });
    setEditMode(true);
  };

  const handleSave = () => {
    // In a real app, this would update the database
    console.log('Save cheese:', formData);
    alert('Cheese saved! Note: This is a demo. In production, this would save to your database.');
    setEditMode(false);
  };

  const handleExportJSON = () => {
    const dataStr = JSON.stringify(CHEESES, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'cheeses-export.json';
    link.click();
  };

  const handleExportCSV = () => {
    const headers = ['Cheese_ID', 'Name', 'Description', 'Milk_Type', 'Origin_Country', 'Rind_Type', 'Texture', 'FlavorBySource'];
    const rows = CHEESES.map(cheese => [
      cheese.Cheese_ID,
      `"${cheese.Name}"`,
      `"${cheese.Description.replace(/"/g, '""')}"`,
      cheese.Milk_Type,
      cheese.Origin_Country,
      cheese.Rind_Type,
      cheese.Texture,
      `"${cheese.FlavorBySource.replace(/"/g, '""')}"`,
    ]);
    
    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const dataBlob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'cheeses-export.csv';
    link.click();
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="mb-2">Cheese Database Admin</h1>
            <p className="text-muted-foreground">
              Manage your cheese collection ({CHEESES.length} cheeses)
            </p>
          </div>
          <div className="flex gap-2">
            <Button onClick={handleExportJSON} variant="outline" size="sm">
              <Download className="mr-2 size-4" />
              Export JSON
            </Button>
            <Button onClick={handleExportCSV} variant="outline" size="sm">
              <Download className="mr-2 size-4" />
              Export CSV
            </Button>
            <Button onClick={handleNewCheese} size="sm">
              <Plus className="mr-2 size-4" />
              New Cheese
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left Panel - Cheese List */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>All Cheeses</CardTitle>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search cheeses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
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
                      selectedCheese?.Cheese_ID === cheese.Cheese_ID ? 'border-primary bg-muted' : ''
                    }`}
                  >
                    <div className="text-base font-medium">{cheese.Name}</div>
                    <div className="text-sm text-muted-foreground">
                      {cheese.Origin_Country} · {cheese.Milk_Type}
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Right Panel - Cheese Details/Edit */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>
                  {editMode ? 'Edit Cheese' : selectedCheese ? selectedCheese.Name : 'Select a cheese'}
                </CardTitle>
                {selectedCheese && !editMode && (
                  <Button onClick={() => setEditMode(true)} size="sm" variant="outline">
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
                    <TabsTrigger value="basic">Basic Info</TabsTrigger>
                    <TabsTrigger value="attributes">Attributes</TabsTrigger>
                  </TabsList>

                  <TabsContent value="basic" className="space-y-4">
                    <div className="grid gap-4">
                      <div>
                        <Label htmlFor="name">Cheese Name</Label>
                        <Input
                          id="name"
                          value={formData.Name || ''}
                          onChange={(e) => setFormData({ ...formData, Name: e.target.value })}
                          disabled={!editMode}
                        />
                      </div>

                      <div>
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          value={formData.Description || ''}
                          onChange={(e) => setFormData({ ...formData, Description: e.target.value })}
                          disabled={!editMode}
                          rows={3}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="milk">Milk Type</Label>
                          <Select
                            value={formData.Milk_Type || 'Cow'}
                            onValueChange={(value) => setFormData({ ...formData, Milk_Type: value })}
                            disabled={!editMode}
                          >
                            <SelectTrigger id="milk">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Cow">Cow</SelectItem>
                              <SelectItem value="Sheep">Sheep</SelectItem>
                              <SelectItem value="Goat">Goat</SelectItem>
                              <SelectItem value="Buffalo">Buffalo</SelectItem>
                              <SelectItem value="Mixed">Mixed</SelectItem>
                              <SelectItem value="Yak">Yak</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="origin">Origin Country</Label>
                          <Input
                            id="origin"
                            value={formData.Origin_Country || ''}
                            onChange={(e) => setFormData({ ...formData, Origin_Country: e.target.value })}
                            disabled={!editMode}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="rind">Rind Type</Label>
                          <Select
                            value={formData.Rind_Type || 'None'}
                            onValueChange={(value) => setFormData({ ...formData, Rind_Type: value })}
                            disabled={!editMode}
                          >
                            <SelectTrigger id="rind">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="None">None</SelectItem>
                              <SelectItem value="Natural">Natural</SelectItem>
                              <SelectItem value="Bloomy">Bloomy</SelectItem>
                              <SelectItem value="Washed">Washed</SelectItem>
                              <SelectItem value="Waxed">Waxed</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="texture">Texture</Label>
                          <Select
                            value={formData.Texture || 'semi-soft'}
                            onValueChange={(value) => setFormData({ ...formData, Texture: value })}
                            disabled={!editMode}
                          >
                            <SelectTrigger id="texture">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="soft">Soft</SelectItem>
                              <SelectItem value="semi-soft">Semi-Soft</SelectItem>
                              <SelectItem value="semi-hard">Semi-Hard</SelectItem>
                              <SelectItem value="hard">Hard</SelectItem>
                              <SelectItem value="firm">Firm</SelectItem>
                              <SelectItem value="crumbly">Crumbly</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="flavor">Flavor by Source</Label>
                        <Textarea
                          id="flavor"
                          value={formData.FlavorBySource || ''}
                          onChange={(e) => setFormData({ ...formData, FlavorBySource: e.target.value })}
                          disabled={!editMode}
                          rows={2}
                        />
                      </div>
                    </div>

                    {editMode && (
                      <div className="flex justify-end gap-2 pt-4">
                        <Button
                          onClick={() => {
                            setEditMode(false);
                            if (selectedCheese) setFormData(selectedCheese);
                          }}
                          variant="outline"
                        >
                          Cancel
                        </Button>
                        <Button onClick={handleSave}>Save Changes</Button>
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="attributes" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">Attribute Mappings</CardTitle>
                        <CardDescription>
                          Configure firmness, meltability, funkiness, flavors, uses, and inclusions
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <Label>Firmness</Label>
                            <Select disabled={!editMode}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select firmness..." />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="101">Very Soft (15)</SelectItem>
                                <SelectItem value="102">Soft (25)</SelectItem>
                                <SelectItem value="103">Semi-Soft (40)</SelectItem>
                                <SelectItem value="104">Semi-Hard (65)</SelectItem>
                                <SelectItem value="105">Hard (85)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label>Meltability</Label>
                            <Select disabled={!editMode}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select meltability..." />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="301">Non-Melting (20)</SelectItem>
                                <SelectItem value="302">Low-Melt (45)</SelectItem>
                                <SelectItem value="303">Moderate-Melt (70)</SelectItem>
                                <SelectItem value="304">High-Melt (90)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label>Funkiness</Label>
                            <Select disabled={!editMode}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select funkiness..." />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="401">Delicate (15)</SelectItem>
                                <SelectItem value="402">Mild (30)</SelectItem>
                                <SelectItem value="403">Aromatic (55)</SelectItem>
                                <SelectItem value="404">Intense (85)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label>Availability</Label>
                            <Select disabled={!editMode}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select availability..." />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="501">Ubiquitous</SelectItem>
                                <SelectItem value="502">Specialty</SelectItem>
                                <SelectItem value="503">Artisanal</SelectItem>
                                <SelectItem value="504">Obscure</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label>Flavor Tags</Label>
                            <div className="mt-2 flex flex-wrap gap-2">
                              <Badge>Buttery</Badge>
                              <Badge>Nutty</Badge>
                              <Badge variant="outline">+ Add more</Badge>
                            </div>
                          </div>

                          <div>
                            <Label>Use Cases</Label>
                            <div className="mt-2 flex flex-wrap gap-2">
                              <Badge variant="secondary">Cooking</Badge>
                              <Badge variant="secondary">Snacking</Badge>
                              <Badge variant="outline">+ Add more</Badge>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 rounded-lg bg-muted p-4">
                          <p className="text-sm text-muted-foreground">
                            <strong>Note:</strong> Attribute mapping requires direct database access. 
                            For now, export the data and manually update the CHEESE_ATTRIBUTE_MAPPINGS 
                            array in /lib/database.ts
                          </p>
                        </div>
                      </CardContent>
                    </Card>
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
