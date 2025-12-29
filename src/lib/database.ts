import { CheeseEntity, Attribute, CheeseAttributeMapping } from '../types/database';

// TABLE 1: CHEESES (Core Entities)
export const CHEESES: CheeseEntity[] = [
  // FRANCE
  { Cheese_ID: 1, Name: 'Brie de Meaux', Description: 'Soft, creamy cow\'s milk cheese with a bloomy rind and buttery flavor.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'Bloomy', Texture: 'soft', FlavorBySource: 'Cow: Buttery and creamy with balanced flavor from moderate fat/protein' },
  { Cheese_ID: 2, Name: 'Roquefort', Description: 'Bold blue sheep\'s milk cheese with a pungent, salty flavor.', Milk_Type: 'Sheep', Origin_Country: 'France', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Sheep: Sweet, rich, and oily/nutty from highest fat and protein concentration' },
  { Cheese_ID: 3, Name: 'Camembert', Description: 'Creamy French cheese with earthy, mushroomy notes.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'Bloomy', Texture: 'soft', FlavorBySource: 'Cow: Creamy, balanced base allows earthy flavors to develop' },
  { Cheese_ID: 4, Name: 'Goat Chèvre', Description: 'Fresh, tangy goat cheese with a creamy spreadable texture.', Milk_Type: 'Goat', Origin_Country: 'France', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Goat: Tangy and lactic with earthy notes from smaller fat globules' },
  { Cheese_ID: 5, Name: 'Comté', Description: 'Nutty, complex Alpine cheese aged in caves.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Buttery base develops nutty complexity through long aging', Is_A2: true },
  { Cheese_ID: 6, Name: 'Époisses', Description: 'Washed-rind cheese with an incredibly pungent aroma and creamy interior.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'Washed', Texture: 'soft', FlavorBySource: 'Cow: Creamy base intensifies through washed-rind treatment' },
  
  // ITALY
  { Cheese_ID: 7, Name: 'Mozzarella di Bufala', Description: 'Fresh, milky buffalo milk cheese with incredible melt.', Milk_Type: 'Buffalo', Origin_Country: 'Italy', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Buffalo: Bright white, creamy, elastic from very high fat content' },
  { Cheese_ID: 8, Name: 'Parmigiano Reggiano', Description: 'The king of cheeses - crystalline, umami-rich, and complex.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Balanced milk concentrates into intense umami during long aging' },
  { Cheese_ID: 9, Name: 'Gorgonzola Dolce', Description: 'Sweet, creamy blue cheese with a mild, buttery flavor.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'soft', FlavorBySource: 'Cow: Creamy sweetness balances blue mold character' },
  { Cheese_ID: 10, Name: 'Pecorino Romano', Description: 'Sharp, salty sheep\'s milk cheese perfect for grating.', Milk_Type: 'Sheep', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Sheep: Rich, oily/nutty character intensifies when aged and salted' },
  { Cheese_ID: 11, Name: 'Taleggio', Description: 'Washed-rind cheese with a fruity tang and creamy texture.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'Washed', Texture: 'semi-soft', FlavorBySource: 'Cow: Buttery base develops fruity notes through washing' },
  
  // SPAIN
  { Cheese_ID: 12, Name: 'Manchego', Description: 'Semi-firm sheep\'s milk cheese from Spain with a nutty, sweet flavor.', Milk_Type: 'Sheep', Origin_Country: 'Spain', Rind_Type: 'Natural', Texture: 'firm', FlavorBySource: 'Sheep: Sweet, rich, and nutty from high fat concentration' },
  { Cheese_ID: 13, Name: 'Drunken Goat', Description: 'Spanish goat cheese soaked in red wine with a beautiful purple rind.', Milk_Type: 'Goat', Origin_Country: 'Spain', Rind_Type: 'Washed', Texture: 'semi-firm', FlavorBySource: 'Goat: Tangy, lactic base complements wine-soaked rind' },
  { Cheese_ID: 14, Name: 'Cabrales', Description: 'Intensely flavored blue cheese aged in mountain caves.', Milk_Type: 'Mixed', Origin_Country: 'Spain', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Mixed: Complex layers from blending cow, sheep, and goat milks' },
  
  // SWITZERLAND
  { Cheese_ID: 15, Name: 'Gruyère', Description: 'Nutty, complex Swiss cheese perfect for fondue.', Milk_Type: 'Cow', Origin_Country: 'Switzerland', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Balanced, buttery milk develops Alpine complexity', Is_A2: true },
  { Cheese_ID: 16, Name: 'Emmental', Description: 'The classic "Swiss cheese" with large holes and mild, nutty flavor.', Milk_Type: 'Cow', Origin_Country: 'Switzerland', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Creamy base ferments to create signature holes and nutty flavor', Is_A2: true },
  { Cheese_ID: 17, Name: 'Appenzeller', Description: 'Washed in herbal brine, creating a complex, spicy flavor.', Milk_Type: 'Cow', Origin_Country: 'Switzerland', Rind_Type: 'Washed', Texture: 'hard', FlavorBySource: 'Cow: Balanced flavor absorbs herbal brine during aging', Is_A2: true },
  
  // UNITED KINGDOM
  { Cheese_ID: 18, Name: 'Aged Cheddar', Description: 'Sharp, crumbly aged cow\'s milk cheese with crystalline texture.', Milk_Type: 'Cow', Origin_Country: 'United Kingdom', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Buttery milk intensifies and crystallizes through aging' },
  { Cheese_ID: 19, Name: 'Stilton', Description: 'Creamy, sophisticated blue cheese with a rich, complex flavor.', Milk_Type: 'Cow', Origin_Country: 'United Kingdom', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Cow: Rich, creamy base creates smooth blue texture' },
  { Cheese_ID: 20, Name: 'Wensleydale', Description: 'Crumbly, mild cheese often paired with fruit.', Milk_Type: 'Cow', Origin_Country: 'United Kingdom', Rind_Type: 'Natural', Texture: 'firm', FlavorBySource: 'Cow: Delicate, balanced milk yields honeyed sweetness' },
  
  // NETHERLANDS
  { Cheese_ID: 21, Name: 'Aged Gouda', Description: 'Caramel-sweet aged cheese with crunchy crystals. Also known as Parrano.', Milk_Type: 'Cow', Origin_Country: 'Netherlands', Rind_Type: 'Waxed', Texture: 'hard', FlavorBySource: 'Cow: Buttery milk develops butterscotch sweetness through long aging' },
  { Cheese_ID: 22, Name: 'Edam', Description: 'Mild, slightly nutty cheese with a red wax coating.', Milk_Type: 'Cow', Origin_Country: 'Netherlands', Rind_Type: 'Waxed', Texture: 'semi-hard', FlavorBySource: 'Cow: Lower-fat milk creates mild, approachable flavor' },
  
  // GREECE
  { Cheese_ID: 23, Name: 'Feta', Description: 'Tangy, crumbly brined cheese essential to Greek cuisine.', Milk_Type: 'Mixed', Origin_Country: 'Greece', Rind_Type: 'None', Texture: 'crumbly', FlavorBySource: 'Sheep/Goat: Rich sweetness from sheep balanced by goat\'s tang' },
  { Cheese_ID: 24, Name: 'Kasseri', Description: 'Smooth, stretchy cheese perfect for saganaki.', Milk_Type: 'Sheep', Origin_Country: 'Greece', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Sheep: Rich, oily texture provides excellent meltability' },
  
  // MIDDLE EAST
  { Cheese_ID: 25, Name: 'Halloumi', Description: 'Squeaky Cypriot cheese that holds its shape when grilled or fried.', Milk_Type: 'Mixed', Origin_Country: 'Middle East', Rind_Type: 'None', Texture: 'semi-hard', FlavorBySource: 'Sheep/Goat: Blend creates firm, squeaky texture that resists melting' },
  { Cheese_ID: 26, Name: 'Labneh', Description: 'Thick, tangy strained yogurt cheese, creamy and spreadable.', Milk_Type: 'Mixed', Origin_Country: 'Middle East', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow/Goat: Strained milk concentrates tangy, lactic flavor' },
  { Cheese_ID: 27, Name: 'Akkawi', Description: 'Mild, slightly salty cheese from the Levant, perfect for desserts.', Milk_Type: 'Cow', Origin_Country: 'Middle East', Rind_Type: 'None', Texture: 'semi-soft', FlavorBySource: 'Cow: Mild, balanced flavor works well in sweet applications' },
  { Cheese_ID: 28, Name: 'Nabulsi', Description: 'Brined cheese from Palestine, often flavored with mahlab or nigella seeds.', Milk_Type: 'Mixed', Origin_Country: 'Middle East', Rind_Type: 'None', Texture: 'semi-soft', FlavorBySource: 'Sheep/Goat: Rich sweetness balances salinity from brining' },
  
  // UNITED STATES
  { Cheese_ID: 29, Name: 'Pepper Jack', Description: 'Monterey Jack cheese infused with spicy peppers.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'None', Texture: 'semi-soft', FlavorBySource: 'Cow: Mild, creamy base allows pepper flavors to shine' },
  { Cheese_ID: 30, Name: 'American Blue', Description: 'Artisan American blue cheese with a crumbly texture and balanced flavor.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'Natural', Texture: 'crumbly', FlavorBySource: 'Cow: Balanced milk develops complex blue mold character' },
  { Cheese_ID: 31, Name: 'Ash-Ripened Goat Cheese', Description: 'American goat cheese with a distinctive ash line and lemony tang.', Milk_Type: 'Goat', Origin_Country: 'United States', Rind_Type: 'Bloomy', Texture: 'soft', FlavorBySource: 'Goat: Tangy, lactic character with bright, lemony notes' },
  
  // CANADA
  { Cheese_ID: 32, Name: 'Oka', Description: 'Semi-soft washed-rind cheese with a nutty, fruity flavor.', Milk_Type: 'Cow', Origin_Country: 'Canada', Rind_Type: 'Washed', Texture: 'semi-soft', FlavorBySource: 'Cow: Buttery, creamy milk develops complexity through monastery methods' },
  { Cheese_ID: 33, Name: 'Cheese Curds', Description: 'Fresh, squeaky curds essential for poutine.', Milk_Type: 'Cow', Origin_Country: 'Canada', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Fresh, high water content creates characteristic squeak' },
  { Cheese_ID: 34, Name: 'Le Cendrillon', Description: 'Ash-covered goat cheese with a delicate, earthy flavor.', Milk_Type: 'Goat', Origin_Country: 'Canada', Rind_Type: 'Bloomy', Texture: 'soft', FlavorBySource: 'Goat: Lactic tang develops earthy, mushroomy notes under ash' },
  
  // MEXICO
  { Cheese_ID: 35, Name: 'Queso Oaxaca', Description: 'Mexican string cheese with excellent melting properties, perfect for quesadillas.', Milk_Type: 'Cow', Origin_Country: 'Mexico', Rind_Type: 'None', Texture: 'semi-soft', FlavorBySource: 'Cow: High water content creates elastic, stringy texture' },
  { Cheese_ID: 36, Name: 'Cotija', Description: 'Aged, crumbly Mexican cheese with a salty, tangy punch. The "Parmesan of Mexico".', Milk_Type: 'Cow', Origin_Country: 'Mexico', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Balanced milk concentrates into salty crystals through aging' },
  { Cheese_ID: 37, Name: 'Queso Fresco', Description: 'Fresh, mild Mexican cheese that crumbles beautifully over tacos and salads.', Milk_Type: 'Cow', Origin_Country: 'Mexico', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Fresh, mild flavor from minimal processing' },
  
  // ARGENTINA
  { Cheese_ID: 38, Name: 'Reggianito', Description: 'Argentine hard cheese similar to Parmesan, perfect for grating.', Milk_Type: 'Cow', Origin_Country: 'Argentina', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Balanced milk develops umami through Italian-inspired methods' },
  { Cheese_ID: 39, Name: 'Provoleta', Description: 'Thick slice of provolone grilled until bubbly, an asado staple.', Milk_Type: 'Cow', Origin_Country: 'Argentina', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Creamy base melts beautifully over open flame' },
  { Cheese_ID: 40, Name: 'Sardo', Description: 'Hard grating cheese with a sharp, tangy flavor.', Milk_Type: 'Cow', Origin_Country: 'Argentina', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Buttery milk sharpens with aging' },
  
  // BRAZIL
  { Cheese_ID: 41, Name: 'Queijo Minas', Description: 'Mild, fresh cheese from Minas Gerais, essential in Brazilian cuisine.', Milk_Type: 'Cow', Origin_Country: 'Brazil', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Balanced base develops subtle sourness through traditional methods' },
  { Cheese_ID: 42, Name: 'Queijo Coalho', Description: 'Squeaky grilling cheese sold on Brazilian beaches.', Milk_Type: 'Cow', Origin_Country: 'Brazil', Rind_Type: 'None', Texture: 'semi-hard', FlavorBySource: 'Cow: High water content holds shape when grilled' },
  { Cheese_ID: 43, Name: 'Requeijão', Description: 'Creamy, spreadable cheese similar to cream cheese.', Milk_Type: 'Cow', Origin_Country: 'Brazil', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Creamy, buttery milk whipped into smooth texture' },
  
  // INDIA
  { Cheese_ID: 44, Name: 'Paneer', Description: 'Fresh, non-melting cheese essential to Indian vegetarian cuisine.', Milk_Type: 'Mixed', Origin_Country: 'India', Rind_Type: 'None', Texture: 'firm', FlavorBySource: 'Cow/Buffalo: High protein creates firm, non-melting structure' },
  { Cheese_ID: 45, Name: 'Chhena', Description: 'Fresh curd cheese used for Bengali sweets like rasgulla.', Milk_Type: 'Mixed', Origin_Country: 'India', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow/Buffalo: Fresh curds retain natural milk sweetness' },
  { Cheese_ID: 46, Name: 'Kalari', Description: 'Kashmiri cheese that becomes stretchy when grilled.', Milk_Type: 'Cow', Origin_Country: 'India', Rind_Type: 'None', Texture: 'semi-soft', FlavorBySource: 'Cow: Himalayan milk develops unique stretchy texture when heated', Is_A2: true },
  
  // MONGOLIA
  { Cheese_ID: 47, Name: 'Byaslag', Description: 'Traditional Mongolian cheese made from yak or cow milk, dried for preservation.', Milk_Type: 'Yak', Origin_Country: 'Mongolia', Rind_Type: 'None', Texture: 'hard', FlavorBySource: 'Yak: Pungent, dense, and herbal from high-altitude grazing' },
  { Cheese_ID: 48, Name: 'Aaruul', Description: 'Sun-dried Mongolian curd cheese, intensely flavored and chewy.', Milk_Type: 'Mixed', Origin_Country: 'Mongolia', Rind_Type: 'None', Texture: 'hard', FlavorBySource: 'Yak/Mixed: Dense, herbal character concentrates through sun-drying' },
  
  // JAPAN
  { Cheese_ID: 49, Name: 'Sakura', Description: 'Delicate cheese wrapped in cherry blossom leaves.', Milk_Type: 'Cow', Origin_Country: 'Japan', Rind_Type: 'Bloomy', Texture: 'soft', FlavorBySource: 'Cow: Delicate, balanced milk absorbs floral sakura notes' },
  { Cheese_ID: 50, Name: 'Tokachi Camembert', Description: 'Japanese-style camembert with a refined, subtle flavor.', Milk_Type: 'Cow', Origin_Country: 'Japan', Rind_Type: 'Bloomy', Texture: 'soft', FlavorBySource: 'Cow: Hokkaido milk creates refined, buttery character' },
  
  // AUSTRALIA
  // REMOVED: Branded cheeses (Heidi Gruyere, Shadows of Blue)
  
  // NEW ZEALAND  
  // REMOVED: Branded cheeses (Kapiti Kikorangi, Whitestone Windsor Blue)
  
  // SOUTH AFRICA
  { Cheese_ID: 55, Name: 'Huguenot', Description: 'Washed-rind cheese with a pungent aroma and creamy interior.', Milk_Type: 'Cow', Origin_Country: 'South Africa', Rind_Type: 'Washed', Texture: 'soft', FlavorBySource: 'Cow: Creamy base develops intense washed-rind character' },
  { Cheese_ID: 56, Name: 'Klein River Gruyere', Description: 'South African take on Swiss gruyere with excellent melting.', Milk_Type: 'Cow', Origin_Country: 'South Africa', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Overberg milk mimics Alpine terroir and complexity' },
  
  // DENMARK
  { Cheese_ID: 57, Name: 'Havarti with Caraway', Description: 'Creamy Danish cheese studded with aromatic caraway seeds.', Milk_Type: 'Cow', Origin_Country: 'Denmark', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Cow: Buttery, creamy base showcases caraway aromatics' },
  
  // ADDITIONAL SHEEP/GOAT OPTIONS FOR COOKING
  { Cheese_ID: 58, Name: 'Ossau-Iraty', Description: 'French Basque sheep cheese with a nutty, slightly sweet flavor. Excellent for melting and gratinating soups.', Milk_Type: 'Sheep', Origin_Country: 'France', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Sheep: Rich, nutty sweetness from mountain-grazed sheep milk' },
  { Cheese_ID: 59, Name: 'Idiazábal', Description: 'Smoked Spanish sheep cheese with a firm, compact texture. Perfect for grating over soups and stews.', Milk_Type: 'Sheep', Origin_Country: 'Spain', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Sheep: Sweet, oily character enhanced by traditional beechwood smoking' },
  
  // GENERIC PARMESAN (commonly available alternative to PDO Parmigiano Reggiano)
  { Cheese_ID: 60, Name: 'Parmesan', Description: 'Hard grating cheese in the Parmesan style. Milder and less complex than authentic Parmigiano Reggiano, but widely available and versatile for everyday cooking.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Balanced milk develops savory character through shorter aging' },

  // EXPANDED CHEDDAR VARIETIES
  { Cheese_ID: 61, Name: 'Mild Cheddar', Description: 'Young, creamy cheddar with a gentle flavor. Perfect for everyday sandwiches and snacking.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'None', Texture: 'semi-hard', FlavorBySource: 'Cow: Buttery milk with minimal aging creates smooth, mellow flavor' },
  { Cheese_ID: 62, Name: 'Sharp Cheddar', Description: 'Aged cheddar with a tangy, bold flavor and slightly crumbly texture.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Extended aging develops sharp, complex tang' },
  { Cheese_ID: 63, Name: 'Extra Sharp Cheddar', Description: 'Intensely flavored aged cheddar with crystalline crunch and robust tang.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Long aging creates intense sharp flavor with crunchy crystals' },
  { Cheese_ID: 64, Name: 'Smoked Cheddar', Description: 'Cheddar naturally smoked for a deep, savory flavor with subtle smokiness.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'None', Texture: 'semi-hard', FlavorBySource: 'Cow: Balanced milk enhanced by wood-smoke aromatics' },

  // BUDGET-FRIENDLY SUPERMARKET STAPLES
  { Cheese_ID: 65, Name: 'Mozzarella (Low-Moisture)', Description: 'Firm, shreddable mozzarella perfect for pizza and casseroles. Budget-friendly and melts beautifully.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'None', Texture: 'semi-soft', FlavorBySource: 'Cow: Mild milk with lower moisture creates excellent melt' },
  { Cheese_ID: 66, Name: 'Swiss Cheese', Description: 'Classic hole-studded cheese with mild, nutty flavor. Great for sandwiches.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Emmental-style fermentation creates signature holes and sweet nuttiness' },
  { Cheese_ID: 67, Name: 'Monterey Jack', Description: 'Mild, creamy American cheese that melts smoothly. Very versatile.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'None', Texture: 'semi-soft', FlavorBySource: 'Cow: Gentle, buttery flavor from minimal processing' },
  { Cheese_ID: 68, Name: 'Colby', Description: 'Mild, moist cheese similar to cheddar but sweeter and softer.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'None', Texture: 'semi-soft', FlavorBySource: 'Cow: Washed-curd process creates mild, sweet character' },
  { Cheese_ID: 69, Name: 'Muenster', Description: 'Smooth, mild cheese with a tangy orange rind. Great melter.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'Washed', Texture: 'semi-soft', FlavorBySource: 'Cow: Creamy base with subtle tang from rind washing' },
  { Cheese_ID: 70, Name: 'Cream Cheese', Description: 'Soft, spreadable fresh cheese. Essential for bagels and baking.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Rich, tangy from cream and culture' },
  { Cheese_ID: 71, Name: 'String Cheese', Description: 'Peelable mozzarella sticks. Perfect kid-friendly snack.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'None', Texture: 'semi-soft', FlavorBySource: 'Cow: Mild, stretchy from pasta filata process' },
  { Cheese_ID: 72, Name: 'American Cheese', Description: 'Processed cheese product with excellent melting. Classic for grilled cheese and burgers.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Blended cheeses create ultra-smooth melt' },

  // MORE GOUDA VARIETIES
  { Cheese_ID: 73, Name: 'Young Gouda', Description: 'Mild, creamy Gouda aged just a few months. Smooth and buttery.', Milk_Type: 'Cow', Origin_Country: 'Netherlands', Rind_Type: 'Waxed', Texture: 'semi-hard', FlavorBySource: 'Cow: Fresh, creamy milk with gentle sweetness' },
  { Cheese_ID: 74, Name: 'Smoked Gouda', Description: 'Gouda naturally smoked over hickory, creating rich, savory depth.', Milk_Type: 'Cow', Origin_Country: 'Netherlands', Rind_Type: 'Waxed', Texture: 'semi-hard', FlavorBySource: 'Cow: Buttery base enhanced by smoke aromatics' },

  // MORE BLUE CHEESE VARIETIES
  { Cheese_ID: 75, Name: 'Gorgonzola Piccante', Description: 'Sharp, crumbly Italian blue with intense, spicy blue mold character.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'crumbly', FlavorBySource: 'Cow: Creamy base with aggressive blue veining' },
  { Cheese_ID: 76, Name: 'Danish Blue', Description: 'Sharp, salty blue cheese with a creamy, spreadable texture.', Milk_Type: 'Cow', Origin_Country: 'Denmark', Rind_Type: 'Natural', Texture: 'crumbly', FlavorBySource: 'Cow: Rich, creamy with pronounced saltiness' },
  // REMOVED: Point Reyes Blue (branded)
  { Cheese_ID: 78, Name: 'Cambozola', Description: 'Creamy triple-cream blue, a cross between Camembert and Gorgonzola.', Milk_Type: 'Cow', Origin_Country: 'Germany', Rind_Type: 'Bloomy', Texture: 'soft', FlavorBySource: 'Cow: Rich cream creates lush, mild blue' },

  // MORE BRIE/SOFT-RIPENED VARIETIES
  { Cheese_ID: 79, Name: 'Triple Cream Brie', Description: 'Luxuriously rich Brie with added cream, creating butter-like texture.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'Bloomy', Texture: 'soft', FlavorBySource: 'Cow: Extra cream creates decadent, silky richness' },
  { Cheese_ID: 80, Name: 'Brillat-Savarin', Description: 'Luscious triple-cream cheese with tangy, buttery flavor.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'Bloomy', Texture: 'soft', FlavorBySource: 'Cow: Cream-enriched milk creates dense, buttery paste' },

  // MORE MEXICAN VARIETIES
  { Cheese_ID: 81, Name: 'Queso Blanco', Description: 'Fresh white cheese that softens but doesn\'t melt. Perfect for frying.', Milk_Type: 'Cow', Origin_Country: 'Mexico', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Acid-set curds create non-melting structure' },
  { Cheese_ID: 82, Name: 'Chihuahua', Description: 'Mexican melting cheese similar to mild cheddar. Great for quesadillas.', Milk_Type: 'Cow', Origin_Country: 'Mexico', Rind_Type: 'None', Texture: 'semi-soft', FlavorBySource: 'Cow: Mild, creamy with excellent melt' },
  { Cheese_ID: 83, Name: 'Asadero', Description: 'Mexican string cheese that melts into creamy smoothness.', Milk_Type: 'Cow', Origin_Country: 'Mexico', Rind_Type: 'None', Texture: 'semi-soft', FlavorBySource: 'Cow: Pasta filata process creates stretchy, melty texture' },
  { Cheese_ID: 84, Name: 'Requeson', Description: 'Mexican ricotta-style cheese, soft and mild. Great for fillings.', Milk_Type: 'Cow', Origin_Country: 'Mexico', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Fresh whey cheese with delicate milkiness' },

  // MORE MIDDLE EASTERN VARIETIES
  { Cheese_ID: 85, Name: 'Jibneh Arabieh', Description: 'Soft white cheese stored in brine, lightly salty and tangy.', Milk_Type: 'Cow', Origin_Country: 'Middle East', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Brining creates clean, salty character' },
  { Cheese_ID: 86, Name: 'Shanklish', Description: 'Aged cheese rolled in za\'atar and chili, with a crumbly texture.', Milk_Type: 'Cow', Origin_Country: 'Middle East', Rind_Type: 'None', Texture: 'crumbly', FlavorBySource: 'Cow: Aged curds develop sharp tang, coated in spices' },
  { Cheese_ID: 87, Name: 'Kashkaval', Description: 'Semi-hard yellow cheese popular throughout the Balkans and Middle East.', Milk_Type: 'Sheep', Origin_Country: 'Middle East', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Sheep: Rich, slightly tangy with good melting properties' },

  // MORE INDIAN VARIETIES
  { Cheese_ID: 88, Name: 'Bandel', Description: 'Smoked cheese from West Bengal with a unique tangy, smoky flavor.', Milk_Type: 'Cow', Origin_Country: 'India', Rind_Type: 'None', Texture: 'semi-hard', FlavorBySource: 'Cow: Portuguese-style cheese with distinctive smoke', Is_A2: true },
  { Cheese_ID: 89, Name: 'Surati', Description: 'Soft paneer-like cheese from Surat, often used in sweets.', Milk_Type: 'Buffalo', Origin_Country: 'India', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Buffalo: Rich, creamy with slight sweetness' },

  // ASIAN VARIETIES
  { Cheese_ID: 90, Name: 'Bocconcini', Description: 'Small fresh mozzarella balls, creamy and mild. Perfect for salads.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Fresh, milky with delicate texture' },
  { Cheese_ID: 91, Name: 'Burrata', Description: 'Fresh mozzarella filled with cream and stracciatella. Luxurious and rich.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Outer shell holds creamy, decadent center' },
  { Cheese_ID: 92, Name: 'Ricotta Salata', Description: 'Pressed, salted, and aged ricotta. Firm enough to grate or slice.', Milk_Type: 'Sheep', Origin_Country: 'Italy', Rind_Type: 'None', Texture: 'firm', FlavorBySource: 'Sheep: Sweet milk concentrated and salted' },

  // MORE GRILLING CHEESES
  { Cheese_ID: 93, Name: 'Queso de Freir', Description: 'Latin American frying cheese that holds its shape when pan-fried.', Milk_Type: 'Cow', Origin_Country: 'South America', Rind_Type: 'None', Texture: 'semi-hard', FlavorBySource: 'Cow: High-heat curd creates non-melting structure' },
  { Cheese_ID: 94, Name: 'Bread Cheese (Juustoleipä)', Description: 'Finnish squeaky cheese traditionally grilled over fire.', Milk_Type: 'Cow', Origin_Country: 'Finland', Rind_Type: 'None', Texture: 'semi-hard', FlavorBySource: 'Cow: Reindeer milk traditionally, now cow, toasted for caramelization' },

  // MORE AMERICAN ARTISAN
  // REMOVED: Branded cheeses (Pleasant Ridge Reserve, Rogue River Blue, Barely Buzzed)
  { Cheese_ID: 98, Name: 'Sheep\'s Milk Ricotta', Description: 'Creamy sheep\'s milk ricotta with rich, sweet flavor.', Milk_Type: 'Sheep', Origin_Country: 'United States', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Sheep: Sweet sheep milk creates luxurious, creamy ricotta' },

  // MORE EUROPEAN VARIETIES
  { Cheese_ID: 99, Name: 'Raclette', Description: 'Swiss melting cheese traditionally scraped onto potatoes. Nutty and creamy.', Milk_Type: 'Cow', Origin_Country: 'Switzerland', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Alpine milk creates perfect melting consistency', Is_A2: true },
  { Cheese_ID: 100, Name: 'Morbier', Description: 'French cheese with distinctive ash layer through the center. Creamy and fruity.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Cow: Two curd batches separated by ash create unique appearance', Is_A2: true },
  { Cheese_ID: 101, Name: 'Fontina Val d\'Aosta', Description: 'Italian Alpine cheese with nutty, earthy flavor. Excellent melter.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Mountain milk creates complex, nutty character' },
  { Cheese_ID: 102, Name: 'Port Salut', Description: 'French semi-soft cheese with mild, savory flavor and smooth texture.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'Washed', Texture: 'semi-soft', FlavorBySource: 'Cow: Monastery-style washed rind creates mellow flavor' },
  { Cheese_ID: 103, Name: 'Limburger', Description: 'Notoriously pungent washed-rind cheese with strong aroma but mild taste.', Milk_Type: 'Cow', Origin_Country: 'Germany', Rind_Type: 'Washed', Texture: 'soft', FlavorBySource: 'Cow: Intense bacteria culture creates powerful aroma' },
  { Cheese_ID: 104, Name: 'Jarlsberg', Description: 'Norwegian cheese similar to Swiss, with mild, nutty-sweet flavor.', Milk_Type: 'Cow', Origin_Country: 'Norway', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Emmental-inspired with unique sweet nuttiness' },
  { Cheese_ID: 105, Name: 'Boursin', Description: 'Soft French cheese with herbs and garlic. Spreadable and flavorful.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Fresh cream cheese base infused with herbs' },

  // MORE GOAT VARIETIES
  { Cheese_ID: 106, Name: 'Crottin de Chavignol', Description: 'Small French goat cheese that ages from creamy to firm and nutty.', Milk_Type: 'Goat', Origin_Country: 'France', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Goat: Tangy when young, develops nuttiness with age' },
  { Cheese_ID: 107, Name: 'Bucheron', Description: 'French goat cheese log with creamy center and firm exterior.', Milk_Type: 'Goat', Origin_Country: 'France', Rind_Type: 'Bloomy', Texture: 'soft', FlavorBySource: 'Goat: Ripens from outside in, creating texture gradient' },
  { Cheese_ID: 108, Name: 'Garrotxa', Description: 'Spanish goat cheese with firm, fudgy texture and nutty flavor.', Milk_Type: 'Goat', Origin_Country: 'Spain', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Goat: Mild, nutty with minimal tang' },

  // SPECIALTY/FLAVORED VARIETIES
  { Cheese_ID: 109, Name: 'Wensleydale with Cranberries', Description: 'British cheese studded with sweet-tart cranberries.', Milk_Type: 'Cow', Origin_Country: 'United Kingdom', Rind_Type: 'Natural', Texture: 'firm', FlavorBySource: 'Cow: Crumbly, honeyed base with fruit inclusions' },
  { Cheese_ID: 110, Name: 'Truffle Pecorino', Description: 'Italian sheep cheese infused with black truffle pieces.', Milk_Type: 'Sheep', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Sheep: Rich, nutty sheep milk with earthy truffle aromatics' },

  // MORE SOUTH AMERICAN
  { Cheese_ID: 111, Name: 'Queso Añejo', Description: 'Aged Mexican cheese, firm and salty. Perfect for crumbling.', Milk_Type: 'Cow', Origin_Country: 'Mexico', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Concentrated, salty from extended aging' },
  { Cheese_ID: 112, Name: 'Queijo de Minas Curado', Description: 'Aged Brazilian cheese with sharp, tangy flavor.', Milk_Type: 'Cow', Origin_Country: 'Brazil', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Fresh Queijo Minas aged to develop sharpness' },

  // MORE FRESH CHEESES
  { Cheese_ID: 113, Name: 'Quark', Description: 'Soft fresh cheese similar to yogurt, tangy and versatile.', Milk_Type: 'Cow', Origin_Country: 'Germany', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Lactic fermentation creates thick, tangy texture' },
  { Cheese_ID: 114, Name: 'Mascarpone', Description: 'Italian cream cheese, ultra-rich and sweet. Essential for tiramisu.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Cream coagulated with acid creates silky, sweet paste' },
  { Cheese_ID: 115, Name: 'Fromage Blanc', Description: 'Fresh French cheese with tangy flavor and creamy texture.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Fresh curds create clean, tangy flavor' },

  // MORE UNIQUE VARIETIES
  { Cheese_ID: 116, Name: 'Scamorza', Description: 'Italian stretched-curd cheese, often smoked. Firm and mild.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'None', Texture: 'semi-hard', FlavorBySource: 'Cow: Mozzarella-style but drier, often smoked' },
  { Cheese_ID: 117, Name: 'Cantal', Description: 'French cheese similar to cheddar with nutty, buttery flavor.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Ancient French cheese with cheddar-like character' },
  { Cheese_ID: 118, Name: 'Reblochon', Description: 'Soft French cheese with washed rind and creamy, nutty flavor.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'Washed', Texture: 'soft', FlavorBySource: 'Cow: Alpine milk creates rich, creamy paste' },
  { Cheese_ID: 119, Name: 'Provolone Piccante', Description: 'Aged Italian provolone with sharp, tangy bite. Excellent for sandwiches.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Extended aging develops sharp, piquant flavor' },

  // MORE ASIAN CHEESES
  { Cheese_ID: 120, Name: 'Korean Mozzarella', Description: 'Stretchy Korean cheese used in corn dogs and street food. Ultra-melty.', Milk_Type: 'Cow', Origin_Country: 'South Korea', Rind_Type: 'None', Texture: 'semi-soft', FlavorBySource: 'Cow: High moisture creates extreme stretch' },
  { Cheese_ID: 121, Name: 'Nepali Chhurpi', Description: 'Hard Himalayan cheese made from yak milk, extremely dense.', Milk_Type: 'Yak', Origin_Country: 'Nepal', Rind_Type: 'None', Texture: 'hard', FlavorBySource: 'Yak: High altitude grazing creates intense, smoky flavor' },
  { Cheese_ID: 122, Name: 'Tibetan Yak Cheese', Description: 'Traditional Tibetan cheese with pungent, earthy flavor.', Milk_Type: 'Yak', Origin_Country: 'Tibet', Rind_Type: 'None', Texture: 'hard', FlavorBySource: 'Yak: Dense protein creates chewy, long-lasting texture' },
  { Cheese_ID: 123, Name: 'Sri Lankan Curd', Description: 'Fresh buffalo curd served with palm treacle, creamy and tangy.', Milk_Type: 'Buffalo', Origin_Country: 'Sri Lanka', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Buffalo: Rich, creamy with natural sweetness' },

  // MORE AFRICAN CHEESES
  { Cheese_ID: 124, Name: 'Wagashi', Description: 'West African fresh cheese similar to feta, crumbly and mild.', Milk_Type: 'Cow', Origin_Country: 'West Africa', Rind_Type: 'None', Texture: 'crumbly', FlavorBySource: 'Cow: Fresh curds create light, crumbly texture' },
  { Cheese_ID: 125, Name: 'Karish', Description: 'Egyptian fresh cheese, very low fat and crumbly.', Milk_Type: 'Cow', Origin_Country: 'Egypt', Rind_Type: 'None', Texture: 'crumbly', FlavorBySource: 'Cow: Skim milk creates light, dry texture' },
  { Cheese_ID: 126, Name: 'Domiati', Description: 'Egyptian white cheese stored in salty brine, similar to feta.', Milk_Type: 'Buffalo', Origin_Country: 'Egypt', Rind_Type: 'None', Texture: 'semi-soft', FlavorBySource: 'Buffalo: Rich milk creates dense, salty cheese' },
  { Cheese_ID: 127, Name: 'Tesmi', Description: 'Ethiopian aged cheese preserved in butter, with intense flavor.', Milk_Type: 'Cow', Origin_Country: 'Ethiopia', Rind_Type: 'None', Texture: 'hard', FlavorBySource: 'Cow: Butter-preserved aging creates unique sharp tang' },
  { Cheese_ID: 128, Name: 'Bokmakiri', Description: 'South African goat cheese wrapped in leaves and smoked.', Milk_Type: 'Goat', Origin_Country: 'South Africa', Rind_Type: 'None', Texture: 'semi-hard', FlavorBySource: 'Goat: Smoke and leaves add complex aromatics' },

  // MORE SOUTH AMERICAN VARIETIES
  { Cheese_ID: 129, Name: 'Queso Paisa', Description: 'Colombian fresh cheese, mild and crumbly. Essential for arepas.', Milk_Type: 'Cow', Origin_Country: 'Colombia', Rind_Type: 'None', Texture: 'crumbly', FlavorBySource: 'Cow: Fresh, mild with slight saltiness' },
  { Cheese_ID: 130, Name: 'Queso de Mano', Description: 'Venezuelan hand-kneaded cheese with stretchy texture.', Milk_Type: 'Cow', Origin_Country: 'Venezuela', Rind_Type: 'None', Texture: 'semi-soft', FlavorBySource: 'Cow: Kneading creates elastic, squeaky texture' },
  { Cheese_ID: 131, Name: 'Queso Mantecoso', Description: 'Peruvian butter cheese, soft and spreadable.', Milk_Type: 'Cow', Origin_Country: 'Peru', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: High fat content creates buttery richness' },
  { Cheese_ID: 132, Name: 'Chanco', Description: 'Chilean semi-soft cheese similar to Gouda, buttery and mild.', Milk_Type: 'Cow', Origin_Country: 'Chile', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Cow: European-inspired with Chilean terroir' },
  { Cheese_ID: 133, Name: 'Cuartirolo', Description: 'Argentine fresh cheese with tangy, creamy flavor.', Milk_Type: 'Cow', Origin_Country: 'Argentina', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Italian immigrant tradition creates fresh tang' },

  { Cheese_ID: 134, Name: 'Comté Reserve', Description: 'Extra-aged Comté with deep complexity and crystalline texture.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: 18+ months develops intense nutty, fruity notes', Is_A2: true },
  { Cheese_ID: 135, Name: 'Beaufort d\'Alpage', Description: 'Summer Alpine cheese from high mountain pastures, fruity and complex.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: High altitude flowers create unique terroir', Is_A2: true },
  { Cheese_ID: 136, Name: 'Abondance', Description: 'French mountain cheese with supple texture and hazelnut flavor.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Alpine milk creates fruity, nutty complexity', Is_A2: true },
  { Cheese_ID: 137, Name: 'Vacherin Mont d\'Or', Description: 'Seasonal French cheese so creamy it\'s eaten with a spoon.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'Washed', Texture: 'soft', FlavorBySource: 'Cow: Spruce bark wrapping infuses resinous notes', Is_A2: true },
  { Cheese_ID: 138, Name: 'Saint-Nectaire', Description: 'French cheese with earthy, mushroomy flavor and supple texture.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Cow: Volcanic soil creates distinctive earthy character', Is_A2: true },
  { Cheese_ID: 139, Name: 'Langres', Description: 'French washed-rind cheese with sunken top filled with Champagne.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'Washed', Texture: 'soft', FlavorBySource: 'Cow: Pungent rind with creamy, tangy interior' },
  { Cheese_ID: 140, Name: 'Chabichou du Poitou', Description: 'Small French goat cheese with creamy center and nutty rind.', Milk_Type: 'Goat', Origin_Country: 'France', Rind_Type: 'Natural', Texture: 'soft', FlavorBySource: 'Goat: Tangy when young, develops hazelnut notes' },

  // MORE ITALIAN VARIETIES
  { Cheese_ID: 141, Name: 'Castelmagno', Description: 'Rare Italian blue from Piedmont, crumbly and complex.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'crumbly', FlavorBySource: 'Cow: Natural blue veining in caves creates wild flavor' },
  { Cheese_ID: 142, Name: 'Asiago Pressato', Description: 'Young, mild Asiago with sweet, buttery flavor. Great melter.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Cow: Minimal aging creates mild, approachable flavor' },
  { Cheese_ID: 143, Name: 'Asiago d\'Allevo', Description: 'Aged Asiago with sharp, nutty complexity. Excellent grating cheese.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Extended aging develops sharp, crystalline character' },
  { Cheese_ID: 144, Name: 'Robiola', Description: 'Soft Italian cheese from cow, sheep, and goat milk blend.', Milk_Type: 'Mixed', Origin_Country: 'Italy', Rind_Type: 'Bloomy', Texture: 'soft', FlavorBySource: 'Mixed: Three milks create complex, creamy layers' },
  { Cheese_ID: 145, Name: 'Piave', Description: 'Venetian cheese similar to Parmesan but sweeter and milder.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Alpine milk creates sweet, fruity notes' },
  { Cheese_ID: 146, Name: 'Ubriaco', Description: 'Italian cheese soaked in wine or grape pomace, with fruity notes.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Wine-soaking creates distinctive purple rind and fruity flavor' },
  { Cheese_ID: 147, Name: 'Caciocavallo', Description: 'Southern Italian stretched cheese with pear-like shape and tangy flavor.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Pasta filata aging develops sharp tang' },
  { Cheese_ID: 148, Name: 'Stracciatella', Description: 'Creamy shreds from inside burrata, rich and indulgent.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Mozzarella shreds in cream create luscious texture' },

  // MORE SPANISH VARIETIES
  { Cheese_ID: 149, Name: 'Valdeon', Description: 'Spanish blue cheese wrapped in leaves, pungent and creamy.', Milk_Type: 'Mixed', Origin_Country: 'Spain', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Cow/Goat: Mountain caves create intense blue character' },
  { Cheese_ID: 150, Name: 'Mahon', Description: 'Menorcan cheese with orange rind and buttery, tangy flavor.', Milk_Type: 'Cow', Origin_Country: 'Spain', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Island terroir creates unique salty tang' },
  { Cheese_ID: 151, Name: 'Tetilla', Description: 'Galician cheese shaped like a breast, mild and buttery.', Milk_Type: 'Cow', Origin_Country: 'Spain', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Cow: Gentle, creamy with slight acidity' },
  { Cheese_ID: 152, Name: 'Zamorano', Description: 'Spanish sheep cheese similar to Manchego but harder and sharper.', Milk_Type: 'Sheep', Origin_Country: 'Spain', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Sheep: Rich, nutty with pronounced tang' },
  { Cheese_ID: 153, Name: 'Torta del Casar', Description: 'Creamy Spanish cheese so runny it\'s eaten with a spoon.', Milk_Type: 'Sheep', Origin_Country: 'Spain', Rind_Type: 'Natural', Texture: 'soft', FlavorBySource: 'Sheep: Thistle rennet creates bitter, complex interior' },

  // MORE UK/IRISH VARIETIES
  { Cheese_ID: 154, Name: 'Caerphilly', Description: 'Welsh cheese with crumbly texture and fresh, lemony flavor.', Milk_Type: 'Cow', Origin_Country: 'United Kingdom', Rind_Type: 'Natural', Texture: 'crumbly', FlavorBySource: 'Cow: Young aging creates bright, clean flavor' },
  { Cheese_ID: 155, Name: 'Red Leicester', Description: 'English cheese colored with annatto, nutty and savory.', Milk_Type: 'Cow', Origin_Country: 'United Kingdom', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Similar to cheddar but sweeter, moister' },
  { Cheese_ID: 156, Name: 'Double Gloucester', Description: 'Traditional English cheese with mellow, buttery flavor.', Milk_Type: 'Cow', Origin_Country: 'United Kingdom', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Full cream creates rich, smooth texture' },
  { Cheese_ID: 157, Name: 'Lancashire', Description: 'English cheese with crumbly texture and mild, creamy flavor.', Milk_Type: 'Cow', Origin_Country: 'United Kingdom', Rind_Type: 'Natural', Texture: 'crumbly', FlavorBySource: 'Cow: Two-day curd process creates unique crumble' },
  { Cheese_ID: 158, Name: 'Cashel Blue', Description: 'Irish blue cheese with creamy texture and balanced flavor.', Milk_Type: 'Cow', Origin_Country: 'Ireland', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Cow: Irish milk creates mild, buttery blue' },
  { Cheese_ID: 159, Name: 'Coolea', Description: 'Irish Gouda-style cheese with sweet, nutty flavor.', Milk_Type: 'Cow', Origin_Country: 'Ireland', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Dutch techniques meet Irish pastures' },
  { Cheese_ID: 160, Name: 'Gubbeen', Description: 'Irish washed-rind cheese with earthy, mushroomy notes.', Milk_Type: 'Cow', Origin_Country: 'Ireland', Rind_Type: 'Washed', Texture: 'semi-soft', FlavorBySource: 'Cow: Atlantic brine washing creates complex character' },

  // MORE GERMAN/AUSTRIAN/DUTCH VARIETIES
  { Cheese_ID: 161, Name: 'Butterkase', Description: 'German butter cheese, ultra-mild and creamy.', Milk_Type: 'Cow', Origin_Country: 'Germany', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Cow: High fat creates butter-like smoothness' },
  { Cheese_ID: 162, Name: 'Tilsit', Description: 'German semi-hard cheese with small holes and tangy flavor.', Milk_Type: 'Cow', Origin_Country: 'Germany', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Piquant starter creates distinctive tang' },
  { Cheese_ID: 163, Name: 'Allgauer Emmentaler', Description: 'German Emmental with large holes and nutty sweetness.', Milk_Type: 'Cow', Origin_Country: 'Germany', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Alpine traditions create mild, nutty character' },
  { Cheese_ID: 164, Name: 'Bergkase', Description: 'Austrian mountain cheese with firm texture and complex flavor.', Milk_Type: 'Cow', Origin_Country: 'Austria', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Alpine pastures create grassy, nutty notes' },
  { Cheese_ID: 165, Name: 'Leyden', Description: 'Dutch cheese spiced with cumin seeds, savory and aromatic.', Milk_Type: 'Cow', Origin_Country: 'Netherlands', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Cumin creates distinctive spiced character' },
  { Cheese_ID: 166, Name: 'Boerenkaas', Description: 'Dutch farmhouse cheese with complex, grassy flavor.', Milk_Type: 'Cow', Origin_Country: 'Netherlands', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Raw milk creates deep, farmstead character' },
  // REMOVED: Beemster (branded)

  // MORE SCANDINAVIAN VARIETIES
  // REMOVED: Vasterbotten (branded)
  { Cheese_ID: 169, Name: 'Mesost', Description: 'Norwegian whey cheese with sweet, caramel flavor.', Milk_Type: 'Cow', Origin_Country: 'Norway', Rind_Type: 'None', Texture: 'firm', FlavorBySource: 'Cow: Whey caramelization creates fudge-like sweetness' },
  { Cheese_ID: 170, Name: 'Ridder', Description: 'Norwegian cheese with orange rind and mild, buttery flavor.', Milk_Type: 'Cow', Origin_Country: 'Norway', Rind_Type: 'Washed', Texture: 'semi-soft', FlavorBySource: 'Cow: Gentle washing creates approachable flavor' },
  { Cheese_ID: 171, Name: 'Danbo', Description: 'Danish semi-soft cheese similar to Gouda, mild and versatile.', Milk_Type: 'Cow', Origin_Country: 'Denmark', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Cow: Gentle, buttery with slight tang' },
  { Cheese_ID: 172, Name: 'Gjetost', Description: 'Norwegian brown cheese made from goat whey, sweet and caramel-like.', Milk_Type: 'Goat', Origin_Country: 'Norway', Rind_Type: 'None', Texture: 'firm', FlavorBySource: 'Goat: Caramelized whey creates unique sweet-tangy flavor' },

  // MORE INTERNATIONAL VARIETIES
  { Cheese_ID: 173, Name: 'Queijo da Serra', Description: 'Portuguese sheep cheese, creamy and slightly spicy.', Milk_Type: 'Sheep', Origin_Country: 'Portugal', Rind_Type: 'Natural', Texture: 'soft', FlavorBySource: 'Sheep: Thistle rennet creates runny, complex interior' },
  { Cheese_ID: 174, Name: 'Sao Jorge', Description: 'Azorean cheese with spicy, peppery bite and firm texture.', Milk_Type: 'Cow', Origin_Country: 'Portugal', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Island aging develops piquant character' },
  { Cheese_ID: 175, Name: 'Graviera', Description: 'Greek hard cheese similar to Gruyere, nutty and sweet.', Milk_Type: 'Sheep', Origin_Country: 'Greece', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Sheep: Alpine-inspired Greek tradition' },
  { Cheese_ID: 176, Name: 'Metsovone', Description: 'Greek smoked cheese with firm texture and rich flavor.', Milk_Type: 'Cow', Origin_Country: 'Greece', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Smoking creates deep, savory character' },
  { Cheese_ID: 177, Name: 'Kefalograviera', Description: 'Hard Greek cheese perfect for frying and saganaki.', Milk_Type: 'Sheep', Origin_Country: 'Greece', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Sheep: Salty, sharp with high melting point' },

  // REMOVED: Branded US artisan cheeses (IDs 178-186): Humboldt Fog, Jasper Hill Harbison, Bayley Hazen Blue, Cowgirl Creamery Mt. Tam, Rogue Creamery Oregonzola, Beecher's Flagship, Tarentaise, Kunik, Grayson

  // REMOVED: Branded Canadian/Australian/NZ cheeses (IDs 187-194): Tiger Blue, Avonlea Clothbound Cheddar, Bleu Benedictine, Riopelle de l'Isle, King Island Roaring Forties Blue, Pyengana Cheddar, Mahoe Aged Gouda, Meyer Vintage Gouda

  // MORE MIDDLE EASTERN/TURKISH VARIETIES
  { Cheese_ID: 195, Name: 'Baladi', Description: 'Middle Eastern white cheese, fresh and slightly salty.', Milk_Type: 'Cow', Origin_Country: 'Middle East', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Simple, clean flavor for everyday use' },
  { Cheese_ID: 196, Name: 'Jibneh Mshallaleh', Description: 'Braided Syrian cheese, salty and squeaky.', Milk_Type: 'Cow', Origin_Country: 'Middle East', Rind_Type: 'None', Texture: 'semi-hard', FlavorBySource: 'Cow: Stretching creates distinctive braided texture' },
  { Cheese_ID: 197, Name: 'Chechil', Description: 'Armenian string cheese, often smoked or braided.', Milk_Type: 'Cow', Origin_Country: 'Middle East', Rind_Type: 'None', Texture: 'semi-hard', FlavorBySource: 'Cow: Stretching creates fibrous, stringy texture' },
  { Cheese_ID: 198, Name: 'Lor', Description: 'Turkish whey cheese, crumbly and mild. Similar to ricotta.', Milk_Type: 'Cow', Origin_Country: 'Turkey', Rind_Type: 'None', Texture: 'crumbly', FlavorBySource: 'Cow: Whey cheese creates light, fresh character' },
  { Cheese_ID: 199, Name: 'Tulum', Description: 'Turkish aged cheese preserved in goatskin, pungent and crumbly.', Milk_Type: 'Goat', Origin_Country: 'Turkey', Rind_Type: 'None', Texture: 'crumbly', FlavorBySource: 'Goat: Traditional aging creates intense, tangy flavor' },
  { Cheese_ID: 200, Name: 'Beyaz Peynir', Description: 'Turkish white cheese similar to feta, brined and tangy.', Milk_Type: 'Sheep', Origin_Country: 'Turkey', Rind_Type: 'None', Texture: 'crumbly', FlavorBySource: 'Sheep: Brine creates classic breakfast cheese' },

  // ADDITIONAL SPECIALTY VARIETIES
  { Cheese_ID: 201, Name: 'Mimolette', Description: 'French cheese with bright orange color and hard, fruity flavor.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Mite-ripened rind creates unique flavor development' },
  { Cheese_ID: 202, Name: 'Crescenza', Description: 'Italian fresh cheese, ultra-creamy and spreadable.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Fresh milk creates silky, flowing texture' },
  { Cheese_ID: 203, Name: 'Toma', Description: 'Italian mountain cheese with mild, nutty flavor.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Alpine milk creates gentle, approachable flavor' },
  { Cheese_ID: 204, Name: 'Canestrato Pugliese', Description: 'Southern Italian sheep cheese with basket imprint and sharp flavor.', Milk_Type: 'Sheep', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Sheep: Traditional basket aging creates distinctive pattern' },
  { Cheese_ID: 205, Name: 'Montasio', Description: 'Italian cheese that ranges from mild when young to sharp when aged.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Versatile aging creates range of flavors' },
  { Cheese_ID: 206, Name: 'Tome des Bauges', Description: 'French mountain cheese with earthy, mushroomy notes.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Cow: Alpine caves create complex terroir', Is_A2: true },
  { Cheese_ID: 207, Name: 'Salers', Description: 'French cheese made only in summer from volcanic pastures.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Volcanic soil creates distinctive mineral notes', Is_A2: true },
  { Cheese_ID: 208, Name: 'Selles-sur-Cher', Description: 'French goat cheese with ash coating and lemony tang.', Milk_Type: 'Goat', Origin_Country: 'France', Rind_Type: 'Natural', Texture: 'soft', FlavorBySource: 'Goat: Ash creates striking appearance and flavor' },
  { Cheese_ID: 209, Name: 'Dorset Blue Vinney', Description: 'Rare English blue cheese with sharp, clean flavor.', Milk_Type: 'Cow', Origin_Country: 'United Kingdom', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Skimmed milk creates unique dry texture' },
  { Cheese_ID: 210, Name: 'Shropshire Blue', Description: 'English blue cheese colored orange with annatto.', Milk_Type: 'Cow', Origin_Country: 'United Kingdom', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Cow: Similar to Stilton but with striking color' },
  { Cheese_ID: 211, Name: 'Yarg', Description: 'Cornish cheese wrapped in nettle leaves with creamy center.', Milk_Type: 'Cow', Origin_Country: 'United Kingdom', Rind_Type: 'None', Texture: 'semi-hard', FlavorBySource: 'Cow: Nettle wrapping creates herbaceous notes' },
  { Cheese_ID: 212, Name: 'Berkswell', Description: 'English sheep cheese with nutty, caramel sweetness.', Milk_Type: 'Sheep', Origin_Country: 'United Kingdom', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Sheep: Pecorino-style with English terroir' },
  { Cheese_ID: 213, Name: 'Spenwood', Description: 'English sheep cheese with firm texture and nutty flavor.', Milk_Type: 'Sheep', Origin_Country: 'United Kingdom', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Sheep: Manchego-inspired with British character' },
  { Cheese_ID: 214, Name: 'Colston Bassett Stilton', Description: 'Premier English Stilton with creamy texture and balanced blue.', Milk_Type: 'Cow', Origin_Country: 'United Kingdom', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Cow: Traditional methods create benchmark Stilton' },
  { Cheese_ID: 215, Name: 'Tunworth', Description: 'English Camembert-style cheese with mushroomy, garlicky notes.', Milk_Type: 'Cow', Origin_Country: 'United Kingdom', Rind_Type: 'Bloomy', Texture: 'soft', FlavorBySource: 'Cow: Hampshire milk creates award-winning bloomy rind' },
  { Cheese_ID: 216, Name: 'Bath Blue', Description: 'English organic blue cheese with creamy, gentle flavor.', Milk_Type: 'Cow', Origin_Country: 'United Kingdom', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Cow: Organic milk creates approachable blue' },
  { Cheese_ID: 217, Name: 'Appleby\'s Cheshire', Description: 'Traditional English Cheshire with crumbly texture and tang.', Milk_Type: 'Cow', Origin_Country: 'United Kingdom', Rind_Type: 'Cloth', Texture: 'crumbly', FlavorBySource: 'Cow: Cloth-bound aging creates authentic character' },
  { Cheese_ID: 218, Name: 'Ardrahan', Description: 'Irish washed-rind cheese with rich, nutty flavor.', Milk_Type: 'Cow', Origin_Country: 'Ireland', Rind_Type: 'Washed', Texture: 'semi-soft', FlavorBySource: 'Cow: Farmhouse methods create deep complexity' },
  { Cheese_ID: 219, Name: 'Durrus', Description: 'Irish semi-soft cheese with fruity, earthy notes.', Milk_Type: 'Cow', Origin_Country: 'Ireland', Rind_Type: 'Washed', Texture: 'semi-soft', FlavorBySource: 'Cow: Cork terroir creates distinctive character' },
  { Cheese_ID: 220, Name: 'Cais na Tire', Description: 'Irish Gouda-style cheese with sweet, buttery flavor.', Milk_Type: 'Cow', Origin_Country: 'Ireland', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Irish interpretation of Dutch classic' },

  // EXPANDED FRENCH CHEESES (221-250)
  { Cheese_ID: 221, Name: 'Fourme d\'Ambert', Description: 'French blue cheese with mild, fruity flavor and creamy texture.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Cow: Gentle blue with fruity sweetness' },
  { Cheese_ID: 222, Name: 'Bleu d\'Auvergne', Description: 'French blue cheese with sharp, pungent character.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Cow: Intense blue veining creates bold flavor' },
  { Cheese_ID: 223, Name: 'Pont-l\'Évêque', Description: 'Norman washed-rind cheese with pungent aroma and rich flavor.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'Washed', Texture: 'soft', FlavorBySource: 'Cow: Square-shaped with intense character' },
  { Cheese_ID: 224, Name: 'Livarot', Description: 'Strong-smelling Norman cheese wrapped in sedge grass.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'Washed', Texture: 'soft', FlavorBySource: 'Cow: Pungent, spicy with sticky rind' },
  { Cheese_ID: 225, Name: 'Munster', Description: 'Alsatian washed-rind cheese with powerful aroma and mild taste.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'Washed', Texture: 'soft', FlavorBySource: 'Cow: Orange rind, creamy interior' },
  { Cheese_ID: 226, Name: 'Maroilles', Description: 'Square washed-rind cheese from northern France, very pungent.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'Washed', Texture: 'soft', FlavorBySource: 'Cow: Intense aroma, surprisingly mild flavor' },
  { Cheese_ID: 227, Name: 'Banon', Description: 'Small goat cheese wrapped in chestnut leaves and tied with raffia.', Milk_Type: 'Goat', Origin_Country: 'France', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Goat: Leaf wrapping creates woodland notes' },
  { Cheese_ID: 228, Name: 'Picodon', Description: 'Small French goat cheese with nutty, tangy flavor.', Milk_Type: 'Goat', Origin_Country: 'France', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Goat: Intensifies with age' },
  { Cheese_ID: 229, Name: 'Valençay', Description: 'Pyramid-shaped goat cheese dusted with ash.', Milk_Type: 'Goat', Origin_Country: 'France', Rind_Type: 'Natural', Texture: 'soft', FlavorBySource: 'Goat: Lemony tang with ash coating' },
  { Cheese_ID: 230, Name: 'Rocamadour', Description: 'Tiny French goat cheese from Quercy, creamy and mild.', Milk_Type: 'Goat', Origin_Country: 'France', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Goat: Delicate, nutty when young' },
  { Cheese_ID: 231, Name: 'Cabécou', Description: 'Small round goat cheese from southwestern France.', Milk_Type: 'Goat', Origin_Country: 'France', Rind_Type: 'Natural', Texture: 'soft', FlavorBySource: 'Goat: Mild to tangy depending on age' },
  { Cheese_ID: 232, Name: 'Chevrotin', Description: 'Alpine goat cheese with washed rind and smooth texture.', Milk_Type: 'Goat', Origin_Country: 'France', Rind_Type: 'Washed', Texture: 'semi-soft', FlavorBySource: 'Goat: Mountain herbs create complex flavor' },
  { Cheese_ID: 233, Name: 'Pélardon', Description: 'Small flat goat cheese from Languedoc with hazelnut notes.', Milk_Type: 'Goat', Origin_Country: 'France', Rind_Type: 'Natural', Texture: 'soft', FlavorBySource: 'Goat: Sweet when fresh, sharp when aged' },
  { Cheese_ID: 234, Name: 'Chaource', Description: 'Soft white cheese from Champagne, creamy and mushroomy.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'Bloomy', Texture: 'soft', FlavorBySource: 'Cow: Rich, buttery with bloomy rind' },
  { Cheese_ID: 235, Name: 'Neufchâtel', Description: 'Soft cheese from Normandy, often heart-shaped.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'Bloomy', Texture: 'soft', FlavorBySource: 'Cow: Similar to Camembert but lighter' },
  { Cheese_ID: 236, Name: 'Coulommiers', Description: 'Smaller cousin of Brie with creamy, buttery flavor.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'Bloomy', Texture: 'soft', FlavorBySource: 'Cow: Elegant, mild bloomy rind' },
  { Cheese_ID: 237, Name: 'Cantal Jeune', Description: 'Young Cantal cheese with mild, milky flavor.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Fresh, buttery when young' },
  { Cheese_ID: 238, Name: 'Cantal Vieux', Description: 'Aged Cantal with sharp, complex flavor and crumbly texture.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: 8+ months develops intense character' },
  { Cheese_ID: 239, Name: 'Laguiole', Description: 'Firm cheese from Aubrac with buttery, nutty notes.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Mountain pastures create unique terroir' },
  { Cheese_ID: 241, Name: 'Sainte-Maure de Touraine', Description: 'Log-shaped goat cheese with straw through center.', Milk_Type: 'Goat', Origin_Country: 'France', Rind_Type: 'Natural', Texture: 'soft', FlavorBySource: 'Goat: Ash-coated with lemony tang' },
  { Cheese_ID: 242, Name: 'Pouligny-Saint-Pierre', Description: 'Pyramid goat cheese with delicate, complex flavor.', Milk_Type: 'Goat', Origin_Country: 'France', Rind_Type: 'Natural', Texture: 'soft', FlavorBySource: 'Goat: Eiffel Tower shape, refined taste' },
  { Cheese_ID: 243, Name: 'Brocciu', Description: 'Corsican fresh whey cheese, similar to ricotta.', Milk_Type: 'Sheep', Origin_Country: 'France', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Sheep: Fresh, milky with slight sweetness' },
  { Cheese_ID: 244, Name: 'Tomme de Savoie', Description: 'Alpine cheese with gray moldy rind and nutty flavor.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Rustic, earthy mountain cheese' },
  { Cheese_ID: 245, Name: 'Tomme des Pyrénées', Description: 'Pyrenean cheese with black wax and mild flavor.', Milk_Type: 'Sheep', Origin_Country: 'France', Rind_Type: 'Waxed', Texture: 'semi-hard', FlavorBySource: 'Sheep: Smooth, buttery with sheep richness' },
  { Cheese_ID: 246, Name: 'Bleu de Gex', Description: 'Jura blue cheese with subtle, creamy character.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Cow: Mild blue with herbaceous notes' },
  { Cheese_ID: 247, Name: 'Bleu du Vercors-Sassenage', Description: 'Ancient blue cheese from Vercors mountains.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Cow: Mild, creamy blue with hazelnut notes' },
  { Cheese_ID: 248, Name: 'Soumaintrain', Description: 'Burgundian washed-rind cheese with strong aroma.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'Washed', Texture: 'soft', FlavorBySource: 'Cow: Pungent rind, creamy interior' },
  { Cheese_ID: 249, Name: 'Ami du Chambertin', Description: 'Burgundian cheese washed in Marc de Bourgogne.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'Washed', Texture: 'soft', FlavorBySource: 'Cow: Wine-washed creates unique flavor' },
  { Cheese_ID: 250, Name: 'Pavé d\'Affinois', Description: 'Modern French triple cream with ultra-smooth texture.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'Bloomy', Texture: 'soft', FlavorBySource: 'Cow: Ultrafiltration creates luxurious creaminess' },

  // EXPANDED ITALIAN CHEESES (251-280)
  { Cheese_ID: 251, Name: 'Grana Padano', Description: 'Hard Italian cheese similar to Parmigiano but milder.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Nutty, less intense than Parmigiano' },
  { Cheese_ID: 252, Name: 'Pecorino Toscano', Description: 'Tuscan sheep cheese, milder than Pecorino Romano.', Milk_Type: 'Sheep', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Sheep: Sweet, fruity when young' },
  { Cheese_ID: 253, Name: 'Pecorino Sardo', Description: 'Sardinian sheep cheese with sweet, nutty flavor.', Milk_Type: 'Sheep', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Sheep: Island pastures create unique character' },
  { Cheese_ID: 254, Name: 'Pecorino Siciliano', Description: 'Sicilian sheep cheese with peppercorns.', Milk_Type: 'Sheep', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Sheep: Spicy, sharp with Mediterranean herbs' },
  { Cheese_ID: 255, Name: 'Fiore Sardo', Description: 'Sardinian smoked sheep cheese with intense flavor.', Milk_Type: 'Sheep', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Sheep: Smoke adds depth to rich sheep milk' },
  { Cheese_ID: 256, Name: 'Canestrato', Description: 'Sicilian sheep cheese molded in reed baskets.', Milk_Type: 'Sheep', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Sheep: Basket pattern, peppercorn studded' },
  { Cheese_ID: 257, Name: 'Ragusano', Description: 'Sicilian stretched cheese aged to develop sharp flavor.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Rectangular shape, pasta filata aged' },
  { Cheese_ID: 258, Name: 'Provola', Description: 'Southern Italian stretched cheese, often smoked.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'None', Texture: 'semi-hard', FlavorBySource: 'Cow: Pear-shaped, mild or smoked' },
  { Cheese_ID: 259, Name: 'Provolone Dolce', Description: 'Mild provolone aged 2-3 months.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Sweet, buttery with minimal aging' },
  { Cheese_ID: 260, Name: 'Bra', Description: 'Piedmontese cheese available fresh or aged.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Mild when young, sharp when aged' },
  { Cheese_ID: 261, Name: 'Raschera', Description: 'Piedmontese cheese with earthy, slightly sharp flavor.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Cow: Alpine pastures create herbaceous notes' },
  { Cheese_ID: 262, Name: 'Toma Piemontese', Description: 'Piedmontese mountain cheese with mild, nutty flavor.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Versatile table and cooking cheese' },
  { Cheese_ID: 263, Name: 'Casciotta d\'Urbino', Description: 'Marche cheese from sheep and cow milk blend.', Milk_Type: 'Mixed', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Mixed: Delicate, slightly sweet' },
  { Cheese_ID: 264, Name: 'Caciotta', Description: 'Generic Italian semi-soft cheese, many regional varieties.', Milk_Type: 'Mixed', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Mixed: Mild, versatile cheese' },
  { Cheese_ID: 265, Name: 'Quartirolo Lombardo', Description: 'Lombardy cheese with fresh, aromatic flavor.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Originally autumn cheese, now year-round' },
  { Cheese_ID: 266, Name: 'Stracchino', Description: 'Soft Lombardy cheese, creamy and spreadable.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Fresh, mild, lactic flavor' },
  { Cheese_ID: 267, Name: 'Gorgonzola Cremificato', Description: 'Ultra-creamy Gorgonzola, spreadable texture.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'soft', FlavorBySource: 'Cow: Mascarpone added creates lush texture' },
  { Cheese_ID: 268, Name: 'Blu del Moncenisio', Description: 'Alpine blue cheese from Piedmont, earthy and complex.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Cow: High altitude creates unique blue' },
  { Cheese_ID: 269, Name: 'Blu di Bufala', Description: 'Blue cheese made from buffalo milk, rich and creamy.', Milk_Type: 'Buffalo', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Buffalo: Rich buffalo milk creates lush blue' },
  { Cheese_ID: 270, Name: 'Puzzone di Moena', Description: 'Washed-rind cheese from Trentino with pungent aroma.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'Washed', Texture: 'semi-soft', FlavorBySource: 'Cow: "Stinky" cheese with mild interior' },
  { Cheese_ID: 271, Name: 'Vezzena', Description: 'Trentino mountain cheese, hard and aromatic.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Alpine flowers create complex flavor' },
  { Cheese_ID: 272, Name: 'Spressa delle Giudicarie', Description: 'Trentino cheese with delicate, sweet flavor.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Partially skimmed milk creates lean texture' },
  { Cheese_ID: 273, Name: 'Silter', Description: 'Lombardy mountain cheese aged in caves.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Long aging develops complex spicy notes' },
  { Cheese_ID: 274, Name: 'Bagòss', Description: 'Lombardy cheese with saffron, aged for years.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Saffron adds golden color and aroma' },
  { Cheese_ID: 275, Name: 'Formai de Mut', Description: 'Bergamo cheese from high Alpine pastures.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Wild flowers create aromatic profile' },
  { Cheese_ID: 276, Name: 'Bitto', Description: 'Ancient Lombardy cheese, can age for decades.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Traditional summer cheese, complex with age' },
  { Cheese_ID: 277, Name: 'Ricotta Romana', Description: 'Roman sheep milk ricotta, creamy and sweet.', Milk_Type: 'Sheep', Origin_Country: 'Italy', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Sheep: Rich sheep milk creates dense ricotta' },
  { Cheese_ID: 278, Name: 'Marzolino', Description: 'Tuscan sheep cheese traditionally made in March.', Milk_Type: 'Sheep', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Sheep: Young grass creates delicate flavor' },
  { Cheese_ID: 279, Name: 'Primo Sale', Description: 'Lightly salted Sicilian cheese, fresh and mild.', Milk_Type: 'Sheep', Origin_Country: 'Italy', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Sheep: First salt, minimal aging' },
  { Cheese_ID: 280, Name: 'Vastedda', Description: 'Sicilian stretched sheep cheese, rare pasta filata.', Milk_Type: 'Sheep', Origin_Country: 'Italy', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Sheep: Unique stretched sheep cheese' },

  // MORE SPANISH & PORTUGUESE (281-300)
  { Cheese_ID: 281, Name: 'Roncal', Description: 'Navarra sheep cheese with buttery, slightly spicy flavor.', Milk_Type: 'Sheep', Origin_Country: 'Spain', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Sheep: First Spanish PDO cheese' },
  { Cheese_ID: 282, Name: 'Gamonedo', Description: 'Spanish blue cheese from Asturias, smoky and sharp.', Milk_Type: 'Mixed', Origin_Country: 'Spain', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Mixed: Smoked blue from mountain caves' },
  { Cheese_ID: 283, Name: 'Picón Bejes-Tresviso', Description: 'Cantabrian blue cheese wrapped in leaves.', Milk_Type: 'Mixed', Origin_Country: 'Spain', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Mixed: Pungent blue aged in caves' },
  { Cheese_ID: 284, Name: 'Queso de La Serena', Description: 'Extremaduran sheep cheese with thistle rennet.', Milk_Type: 'Sheep', Origin_Country: 'Spain', Rind_Type: 'Natural', Texture: 'soft', FlavorBySource: 'Sheep: Vegetable rennet creates bitter notes' },
  { Cheese_ID: 285, Name: 'Queso Ibores', Description: 'Extremaduran goat cheese rubbed with paprika.', Milk_Type: 'Goat', Origin_Country: 'Spain', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Goat: Paprika rind, tangy interior' },
  { Cheese_ID: 286, Name: 'Murcia al Vino', Description: 'Goat cheese soaked in red wine, distinctive purple rind.', Milk_Type: 'Goat', Origin_Country: 'Spain', Rind_Type: 'Washed', Texture: 'semi-firm', FlavorBySource: 'Goat: Wine creates fruity, tangy flavor' },
  { Cheese_ID: 287, Name: 'Majorero', Description: 'Canary Islands goat cheese with paprika or gofio rind.', Milk_Type: 'Goat', Origin_Country: 'Spain', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Goat: Island terroir, coated rind' },
  { Cheese_ID: 288, Name: 'Flor de Guía', Description: 'Canary Islands cheese with flower rennet, creamy center.', Milk_Type: 'Mixed', Origin_Country: 'Spain', Rind_Type: 'Natural', Texture: 'soft', FlavorBySource: 'Mixed: Thistle rennet creates bitter complexity' },
  { Cheese_ID: 289, Name: 'Arzúa-Ulloa', Description: 'Galician cow cheese with mild, buttery flavor.', Milk_Type: 'Cow', Origin_Country: 'Spain', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Cow: Delicate, slightly acidic' },
  { Cheese_ID: 290, Name: 'San Simón da Costa', Description: 'Galician smoked cheese with pear shape.', Milk_Type: 'Cow', Origin_Country: 'Spain', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Birch wood smoke, creamy interior' },
  { Cheese_ID: 291, Name: 'Cebreiro', Description: 'Galician cheese shaped like a chef\'s hat.', Milk_Type: 'Cow', Origin_Country: 'Spain', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Fresh, granular, lightly acidic' },
  { Cheese_ID: 292, Name: 'L\'Alt Urgell y la Cerdanya', Description: 'Catalan cow cheese with creamy texture.', Milk_Type: 'Cow', Origin_Country: 'Spain', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Cow: Pyrenean pastures create herbaceous notes' },
  { Cheese_ID: 293, Name: 'Afuega\'l Pitu', Description: 'Asturian cheese with unusual granular texture.', Milk_Type: 'Cow', Origin_Country: 'Spain', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Spicy when aged, available white or paprika' },
  { Cheese_ID: 294, Name: 'Casín', Description: 'Rare Asturian cheese kneaded and aged in humid caves.', Milk_Type: 'Cow', Origin_Country: 'Spain', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Intense, spicy from long aging' },
  { Cheese_ID: 295, Name: 'Azeitão', Description: 'Portuguese sheep cheese with thistle rennet, creamy.', Milk_Type: 'Sheep', Origin_Country: 'Portugal', Rind_Type: 'Natural', Texture: 'soft', FlavorBySource: 'Sheep: Runny interior, earthy flavor' },
  { Cheese_ID: 296, Name: 'Évora', Description: 'Portuguese sheep cheese with sharp, tangy flavor.', Milk_Type: 'Sheep', Origin_Country: 'Portugal', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Sheep: Intensely flavored, aged' },
  { Cheese_ID: 297, Name: 'Nisa', Description: 'Portuguese sheep cheese from Alentejo region.', Milk_Type: 'Sheep', Origin_Country: 'Portugal', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Sheep: Cardoon rennet creates unique flavor' },
  { Cheese_ID: 298, Name: 'Rabaçal', Description: 'Portuguese cheese from sheep and goat milk blend.', Milk_Type: 'Mixed', Origin_Country: 'Portugal', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Sheep/Goat: Complex blend of both milks' },
  { Cheese_ID: 299, Name: 'Serpa', Description: 'Portuguese sheep cheese with thistle rennet from Alentejo.', Milk_Type: 'Sheep', Origin_Country: 'Portugal', Rind_Type: 'Natural', Texture: 'soft', FlavorBySource: 'Sheep: Strong, creamy, slightly bitter' },
  { Cheese_ID: 300, Name: 'Terrincho', Description: 'Portuguese sheep cheese from Trás-os-Montes.', Milk_Type: 'Sheep', Origin_Country: 'Portugal', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Sheep: Intense, slightly spicy' },

  // MORE UK & IRISH (301-320)
  // REMOVED: Branded UK cheeses (Stinking Bishop, Cornish Yarg Garlic, Montgomery's Cheddar, Keen's Cheddar, Westcombe Cheddar)
  { Cheese_ID: 306, Name: 'Pitchfork Cheddar', Description: 'Modern British cheddar with bold flavor.', Milk_Type: 'Cow', Origin_Country: 'United Kingdom', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Sharp, tangy, well-aged' },
  { Cheese_ID: 307, Name: 'Lincolnshire Poacher', Description: 'Hard cheese similar to Swiss mountain cheeses.', Milk_Type: 'Cow', Origin_Country: 'United Kingdom', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Sweet, nutty with caramel notes' },
  { Cheese_ID: 308, Name: 'Lord of the Hundreds', Description: 'Sussex sheep cheese with nutty, caramel flavor.', Milk_Type: 'Sheep', Origin_Country: 'United Kingdom', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Sheep: British version of Manchego' },
  { Cheese_ID: 309, Name: 'Wigmore', Description: 'English sheep cheese with bloomy rind and rich flavor.', Milk_Type: 'Sheep', Origin_Country: 'United Kingdom', Rind_Type: 'Bloomy', Texture: 'soft', FlavorBySource: 'Sheep: Buttery, caramelized nuts' },
  { Cheese_ID: 310, Name: 'Ticklemore', Description: 'Devon goat cheese with firm, crumbly texture.', Milk_Type: 'Goat', Origin_Country: 'United Kingdom', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Goat: Clean, fresh with citrus notes' },
  { Cheese_ID: 311, Name: 'Dorstone', Description: 'English goat cheese with ash layer and bloomy rind.', Milk_Type: 'Goat', Origin_Country: 'United Kingdom', Rind_Type: 'Bloomy', Texture: 'soft', FlavorBySource: 'Goat: Lemony, elegant British chèvre' },
  { Cheese_ID: 312, Name: 'Ragstone', Description: 'Pyramid goat cheese from Herefordshire.', Milk_Type: 'Goat', Origin_Country: 'United Kingdom', Rind_Type: 'Bloomy', Texture: 'soft', FlavorBySource: 'Goat: Ash-coated, citrusy tang' },
  { Cheese_ID: 313, Name: 'Perroche', Description: 'Washed-rind goat cheese from Herefordshire.', Milk_Type: 'Goat', Origin_Country: 'United Kingdom', Rind_Type: 'Washed', Texture: 'soft', FlavorBySource: 'Goat: Pungent rind, creamy interior' },
  { Cheese_ID: 314, Name: 'Rollright', Description: 'Oxfordshire cheese with brine-washed rind.', Milk_Type: 'Cow', Origin_Country: 'United Kingdom', Rind_Type: 'Washed', Texture: 'semi-soft', FlavorBySource: 'Cow: Savory, meaty notes from washing' },
  { Cheese_ID: 315, Name: 'Ogleshield', Description: 'Raclette-style cheese from Somerset.', Milk_Type: 'Cow', Origin_Country: 'United Kingdom', Rind_Type: 'Washed', Texture: 'semi-soft', FlavorBySource: 'Cow: Excellent melter with fruity notes' },
  { Cheese_ID: 316, Name: 'Baron Bigod', Description: 'English Brie-style cheese from Suffolk.', Milk_Type: 'Cow', Origin_Country: 'United Kingdom', Rind_Type: 'Bloomy', Texture: 'soft', FlavorBySource: 'Cow: Rich, mushroomy British Brie', Is_A2: true },
  { Cheese_ID: 317, Name: 'Waterloo', Description: 'English bloomy rind cheese from Berkshire.', Milk_Type: 'Cow', Origin_Country: 'United Kingdom', Rind_Type: 'Bloomy', Texture: 'soft', FlavorBySource: 'Cow: Golden, buttery from Guernsey milk', Is_A2: true },
  { Cheese_ID: 318, Name: 'Sleightlett', Description: 'Yorkshire sheep cheese with natural rind.', Milk_Type: 'Sheep', Origin_Country: 'United Kingdom', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Sheep: Sweet, nutty with herbaceous notes' },
  { Cheese_ID: 319, Name: 'Corra Linn', Description: 'Scottish goat cheese log with fresh flavor.', Milk_Type: 'Goat', Origin_Country: 'United Kingdom', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Goat: Clean, lemony Scottish chèvre' },
  { Cheese_ID: 320, Name: 'Mull Cheddar', Description: 'Scottish cheddar from Isle of Mull with rich flavor.', Milk_Type: 'Cow', Origin_Country: 'United Kingdom', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Unpasteurized, complex island character', Is_A2: true },

  // REMOVED: Branded Irish cheeses (IDs 321-330): Knockdrinna, Crozier Blue, Knockalara, St. Tola, Carrigaline, Hegarty's Cheddar, Milleens, Desmond, Corleggy, Boilie

  // MORE SWISS & ALPINE (331-350)
  { Cheese_ID: 331, Name: 'Tête de Moine', Description: 'Swiss cheese shaved into rosettes, nutty and aromatic.', Milk_Type: 'Cow', Origin_Country: 'Switzerland', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Monk\'s head cheese, intense flavor', Is_A2: true },
  { Cheese_ID: 332, Name: 'Sbrinz', Description: 'Extra-hard Swiss cheese, aged up to 3 years.', Milk_Type: 'Cow', Origin_Country: 'Switzerland', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Ancient cheese, spicy and fruity', Is_A2: true },
  { Cheese_ID: 333, Name: 'Schabziger', Description: 'Swiss green cheese flavored with blue fenugreek.', Milk_Type: 'Cow', Origin_Country: 'Switzerland', Rind_Type: 'None', Texture: 'hard', FlavorBySource: 'Cow: Unique herb flavor, grating cheese', Is_A2: true },
  { Cheese_ID: 334, Name: 'Vacherin Fribourgeois', Description: 'Swiss cheese essential for fondue.', Milk_Type: 'Cow', Origin_Country: 'Switzerland', Rind_Type: 'Washed', Texture: 'semi-soft', FlavorBySource: 'Cow: Earthy, excellent melter', Is_A2: true },
  { Cheese_ID: 335, Name: 'L\'Etivaz', Description: 'Swiss Alpine cheese made in copper cauldrons over wood fire.', Milk_Type: 'Cow', Origin_Country: 'Switzerland', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Summer pastures, smoky notes', Is_A2: true },
  { Cheese_ID: 336, Name: 'Mutschli', Description: 'Small Swiss cheese with mild, buttery flavor.', Milk_Type: 'Cow', Origin_Country: 'Switzerland', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Individual serving size', Is_A2: true },
  { Cheese_ID: 337, Name: 'Tilsiter Switzerland', Description: 'Swiss version of Tilsit with mild, tangy flavor.', Milk_Type: 'Cow', Origin_Country: 'Switzerland', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Swiss take on German classic', Is_A2: true },
  { Cheese_ID: 338, Name: 'Fromage à Raclette', Description: 'Traditional Swiss melting cheese for raclette.', Milk_Type: 'Cow', Origin_Country: 'Switzerland', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Perfect for scraping and melting', Is_A2: true },
  { Cheese_ID: 339, Name: 'Bündner Bergkäse', Description: 'Mountain cheese from Graubünden canton.', Milk_Type: 'Cow', Origin_Country: 'Switzerland', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Alpine flowers create aromatic profile', Is_A2: true },
  { Cheese_ID: 340, Name: 'Stanser Fladä', Description: 'Swiss flatbread cheese from Nidwalden.', Milk_Type: 'Cow', Origin_Country: 'Switzerland', Rind_Type: 'None', Texture: 'semi-soft', FlavorBySource: 'Cow: Traditional festive cheese', Is_A2: true },
  { Cheese_ID: 341, Name: 'Vorarlberger Bergkäse', Description: 'Austrian mountain cheese with complex flavor.', Milk_Type: 'Cow', Origin_Country: 'Austria', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Alpine pastures create fruity notes', Is_A2: true },
  { Cheese_ID: 342, Name: 'Alpkäse', Description: 'Generic Austrian Alpine cheese, nutty and firm.', Milk_Type: 'Cow', Origin_Country: 'Austria', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Mountain grass creates herbaceous flavor', Is_A2: true },
  { Cheese_ID: 343, Name: 'Mondseer', Description: 'Austrian washed-rind cheese with pungent aroma.', Milk_Type: 'Cow', Origin_Country: 'Austria', Rind_Type: 'Washed', Texture: 'semi-soft', FlavorBySource: 'Cow: Monastery cheese with strong character' },
  { Cheese_ID: 344, Name: 'Almkäse', Description: 'Austrian alpine cheese made in mountain huts.', Milk_Type: 'Cow', Origin_Country: 'Austria', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Summer cheese with wild flower notes' },
  { Cheese_ID: 345, Name: 'Tiroler Graukäse', Description: 'Austrian sour milk cheese, very low fat.', Milk_Type: 'Cow', Origin_Country: 'Austria', Rind_Type: 'None', Texture: 'crumbly', FlavorBySource: 'Cow: Skimmed milk creates sharp, acidic flavor' },
  { Cheese_ID: 346, Name: 'Pinzgauer Bierkäse', Description: 'Austrian beer cheese with strong flavor.', Milk_Type: 'Cow', Origin_Country: 'Austria', Rind_Type: 'Washed', Texture: 'semi-soft', FlavorBySource: 'Cow: Beer-washed creates unique character' },
  { Cheese_ID: 347, Name: 'Schlierbacher', Description: 'Austrian monastery cheese with mild flavor.', Milk_Type: 'Cow', Origin_Country: 'Austria', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Organic milk from monastery farm' },
  { Cheese_ID: 348, Name: 'Bregenzerwald Bergkäse', Description: 'Vorarlberg mountain cheese with fruity notes.', Milk_Type: 'Cow', Origin_Country: 'Austria', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Protected designation Alpine cheese', Is_A2: true },
  { Cheese_ID: 349, Name: 'Heumilch Käse', Description: 'Austrian hay milk cheese with aromatic flavor.', Milk_Type: 'Cow', Origin_Country: 'Austria', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Hay-fed cows create unique terroir', Is_A2: true },
  { Cheese_ID: 350, Name: 'Steirischer Kren', Description: 'Austrian cheese with horseradish.', Milk_Type: 'Cow', Origin_Country: 'Austria', Rind_Type: 'None', Texture: 'semi-hard', FlavorBySource: 'Cow: Spicy horseradish addition' },

  // MORE AMERICAN ARTISAN & REGIONAL (351-380)
  { Cheese_ID: 351, Name: 'Cabot Clothbound Cheddar', Description: 'Vermont cheddar aged in cloth with complex flavor.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'Cloth', Texture: 'hard', FlavorBySource: 'Cow: Co-op cheese with traditional aging' },
  { Cheese_ID: 352, Name: 'Alpha Tolman', Description: 'Vermont Alpine-style cheese with sweet, nutty flavor.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Cave-aged American Alpine' },
  { Cheese_ID: 353, Name: 'Winnimere', Description: 'Seasonal spruce-wrapped Vermont cheese, creamy and woodsy.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'Washed', Texture: 'soft', FlavorBySource: 'Cow: Winter cheese with resinous notes' },
  { Cheese_ID: 354, Name: 'Rush Creek Reserve', Description: 'Wisconsin spruce-wrapped seasonal cheese, ultra-creamy.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'Washed', Texture: 'soft', FlavorBySource: 'Cow: Vacherin-inspired, ultra-creamy' },
  { Cheese_ID: 355, Name: 'Sartori BellaVitano', Description: 'Wisconsin cheese with Italian-inspired flavor.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Parmesan meets cheddar' },
  { Cheese_ID: 356, Name: 'Hook\'s 15 Year Cheddar', Description: 'Ultra-aged Wisconsin cheddar with intense crystals.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Extreme aging creates unique character' },
  // REMOVED: Branded US cheeses (IDs 357-370): Widmer's Brick, Carr Valley Billy Blue, Point Reyes Toma, Red Hawk, San Andreas, Bandaged Cheddar, Vella Dry Jack, Purple Haze, Truffle Tremor, Laura Chenel Chèvre, Redwood Hill Crottin, Matos St. George, Nicasio Square, Andante Dairy Acapella
  { Cheese_ID: 371, Name: 'Dorset', Description: 'Vermont washed-rind cheese with rich, meaty flavor.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'Washed', Texture: 'semi-soft', FlavorBySource: 'Cow: Rich, savory Vermont cheese' },
  { Cheese_ID: 372, Name: 'Manchester', Description: 'Vermont goat cheese with elegant bloomy rind.', Milk_Type: 'Goat', Origin_Country: 'United States', Rind_Type: 'Bloomy', Texture: 'soft', FlavorBySource: 'Goat: Elegant square chèvre' },
  { Cheese_ID: 373, Name: 'Moses Sleeper', Description: 'Vermont bloomy rind cheese with buttery flavor.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'Bloomy', Texture: 'soft', FlavorBySource: 'Cow: American Camembert-style' },
  { Cheese_ID: 374, Name: 'Vermont Shepherd', Description: 'Vermont sheep cheese aged in caves.', Milk_Type: 'Sheep', Origin_Country: 'United States', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Sheep: Nutty, sweet Vermont sheep' },
  { Cheese_ID: 375, Name: 'Farmstead Cheddar', Description: 'Vermont estate cheddar from historic farm, rich and complex.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Estate cheese from historic farm' },
  { Cheese_ID: 376, Name: 'Tarentaise', Description: 'Vermont Alpine cheese with complex, nutty flavor.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: French technique, Vermont terroir' },
  { Cheese_ID: 377, Name: 'Lazy Lady Fil-a-Buster', Description: 'Vermont washed-rind goat cheese.', Milk_Type: 'Goat', Origin_Country: 'United States', Rind_Type: 'Washed', Texture: 'soft', FlavorBySource: 'Goat: Pungent, complex artisan cheese' },
  { Cheese_ID: 378, Name: 'Lazy Lady La Roche', Description: 'Vermont goat cheese with ash and bloomy rind.', Milk_Type: 'Goat', Origin_Country: 'United States', Rind_Type: 'Bloomy', Texture: 'soft', FlavorBySource: 'Goat: Elegant layered chèvre' },
  { Cheese_ID: 379, Name: 'Sequatchie Cove Coppinger', Description: 'Tennessee washed-rind cheese with savory flavor.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'Washed', Texture: 'semi-soft', FlavorBySource: 'Cow: Southern farmstead cheese' },
  { Cheese_ID: 380, Name: 'Thomasville Tomme', Description: 'Georgia farmstead cheese with nutty, earthy flavor.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Southern terroir creates unique profile' },

  // MORE DUTCH & GERMAN (381-400)
  { Cheese_ID: 381, Name: 'Roomano', Description: 'Dutch cheese similar to Parmesan, aged and sharp.', Milk_Type: 'Cow', Origin_Country: 'Netherlands', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Dutch interpretation of Italian style' },
  { Cheese_ID: 382, Name: 'Maasdam', Description: 'Dutch Swiss-style cheese with large holes.', Milk_Type: 'Cow', Origin_Country: 'Netherlands', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Sweet, nutty with eye formation' },
  // REMOVED: Old Amsterdam (branded)
  { Cheese_ID: 384, Name: 'Gouda with Cumin', Description: 'Dutch Gouda studded with cumin seeds.', Milk_Type: 'Cow', Origin_Country: 'Netherlands', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Spiced variation of classic' },
  { Cheese_ID: 385, Name: 'Gouda with Fenugreek', Description: 'Dutch Gouda with fenugreek seeds.', Milk_Type: 'Cow', Origin_Country: 'Netherlands', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Aromatic seed addition' },
  // REMOVED: Branded Dutch cheeses (Prima Donna, Reypenaer, Parrano, Texelaar)
  { Cheese_ID: 390, Name: 'Bianco', Description: 'Dutch fresh cheese with mild flavor.', Milk_Type: 'Cow', Origin_Country: 'Netherlands', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Fresh, milky, versatile' },
  { Cheese_ID: 391, Name: 'Weisslacker', Description: 'German washed-rind cheese with strong flavor.', Milk_Type: 'Cow', Origin_Country: 'Germany', Rind_Type: 'Washed', Texture: 'semi-soft', FlavorBySource: 'Cow: Bavarian "white lacquer" cheese' },
  { Cheese_ID: 392, Name: 'Romadur', Description: 'German washed-rind cheese similar to Limburger.', Milk_Type: 'Cow', Origin_Country: 'Germany', Rind_Type: 'Washed', Texture: 'soft', FlavorBySource: 'Cow: Milder than Limburger' },
  { Cheese_ID: 393, Name: 'Harzer', Description: 'German sour milk cheese, very low fat.', Milk_Type: 'Cow', Origin_Country: 'Germany', Rind_Type: 'None', Texture: 'crumbly', FlavorBySource: 'Cow: Sharp, acidic, traditional' },
  { Cheese_ID: 394, Name: 'Handkäse', Description: 'German sour milk cheese often served with vinegar.', Milk_Type: 'Cow', Origin_Country: 'Germany', Rind_Type: 'None', Texture: 'crumbly', FlavorBySource: 'Cow: Tangy, hand-formed cheese' },
  { Cheese_ID: 395, Name: 'Mainzer', Description: 'German sour milk cheese from Mainz region.', Milk_Type: 'Cow', Origin_Country: 'Germany', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Yellow rind from spice rub' },
  { Cheese_ID: 396, Name: 'Obatzda', Description: 'Bavarian cheese spread with paprika and onions.', Milk_Type: 'Cow', Origin_Country: 'Germany', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Beer garden classic' },
  { Cheese_ID: 397, Name: 'Bavarian Blue', Description: 'German blue cheese with creamy texture.', Milk_Type: 'Cow', Origin_Country: 'Germany', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Cow: Mild, accessible blue' },
  // REMOVED: Bergader Edelpilz (branded)
  { Cheese_ID: 399, Name: 'Bonifaz', Description: 'German cheese with washed rind and aromatic flavor.', Milk_Type: 'Cow', Origin_Country: 'Germany', Rind_Type: 'Washed', Texture: 'semi-soft', FlavorBySource: 'Cow: Monastery-style German cheese' },
  { Cheese_ID: 400, Name: 'Altenburger Ziegenkäse', Description: 'German goat cheese with caraway seeds.', Milk_Type: 'Goat', Origin_Country: 'Germany', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Goat: Spiced goat cheese log' },

  // SCANDINAVIAN EXPANSION (401-420)
  { Cheese_ID: 401, Name: 'Gamalost', Description: 'Norwegian ancient cheese with strong, sharp flavor.', Milk_Type: 'Cow', Origin_Country: 'Norway', Rind_Type: 'None', Texture: 'crumbly', FlavorBySource: 'Cow: Traditional Viking cheese' },
  { Cheese_ID: 402, Name: 'Nøkkelost', Description: 'Norwegian cheese with cloves and cumin.', Milk_Type: 'Cow', Origin_Country: 'Norway', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Spiced Norwegian cheese' },
  { Cheese_ID: 403, Name: 'Pultost', Description: 'Norwegian sour cream cheese with caraway.', Milk_Type: 'Cow', Origin_Country: 'Norway', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Spreadable, tangy' },
  // REMOVED: Snøfrisk (branded)
  { Cheese_ID: 405, Name: 'Norvegia', Description: 'Norwegian semi-hard cheese similar to Gouda.', Milk_Type: 'Cow', Origin_Country: 'Norway', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Mild, buttery Norwegian staple' },
  { Cheese_ID: 406, Name: 'Herrgård', Description: 'Swedish cheese similar to Swiss Emmental.', Milk_Type: 'Cow', Origin_Country: 'Sweden', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Nutty, sweet with small holes' },
  { Cheese_ID: 407, Name: 'Präst', Description: 'Swedish cheese with mild, nutty flavor.', Milk_Type: 'Cow', Origin_Country: 'Sweden', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: "Priest cheese" traditional style' },
  { Cheese_ID: 408, Name: 'Svecia', Description: 'Swedish hard cheese with firm texture.', Milk_Type: 'Cow', Origin_Country: 'Sweden', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Versatile Swedish cheese' },
  { Cheese_ID: 409, Name: 'Grevé', Description: 'Swedish cheese similar to Emmental with larger holes.', Milk_Type: 'Cow', Origin_Country: 'Sweden', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: "Count cheese" mild and sweet' },
  { Cheese_ID: 410, Name: 'Hushållsost', Description: 'Swedish household cheese, mild and versatile.', Milk_Type: 'Cow', Origin_Country: 'Sweden', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Everyday Swedish cheese' },
  { Cheese_ID: 411, Name: 'Adelost', Description: 'Swedish blue cheese with mild flavor.', Milk_Type: 'Cow', Origin_Country: 'Sweden', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Cow: Creamy Swedish blue' },
  { Cheese_ID: 412, Name: 'Blå Gotland', Description: 'Swedish blue cheese from Gotland island.', Milk_Type: 'Cow', Origin_Country: 'Sweden', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Cow: Island blue with unique character' },
  { Cheese_ID: 413, Name: 'Havarti Cream', Description: 'Danish enriched Havarti with extra cream.', Milk_Type: 'Cow', Origin_Country: 'Denmark', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Cow: Rich, buttery Havarti variation' },
  { Cheese_ID: 414, Name: 'Esrom', Description: 'Danish monastery cheese with pungent flavor.', Milk_Type: 'Cow', Origin_Country: 'Denmark', Rind_Type: 'Washed', Texture: 'semi-soft', FlavorBySource: 'Cow: Port Salut-style Danish cheese' },
  { Cheese_ID: 415, Name: 'Fynbo', Description: 'Danish cheese similar to Swiss with mild flavor.', Milk_Type: 'Cow', Origin_Country: 'Denmark', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Danish version of Swiss cheese' },
  { Cheese_ID: 416, Name: 'Maribo', Description: 'Danish cheese similar to Gouda with small holes.', Milk_Type: 'Cow', Origin_Country: 'Denmark', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Mild, slightly sweet' },
  { Cheese_ID: 417, Name: 'Mycella', Description: 'Danish blue cheese with creamy texture.', Milk_Type: 'Cow', Origin_Country: 'Denmark', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Cow: Gorgonzola-style Danish blue' },
  { Cheese_ID: 418, Name: 'Rygeost', Description: 'Danish smoked cheese spread.', Milk_Type: 'Cow', Origin_Country: 'Denmark', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Smoky, spreadable' },
  { Cheese_ID: 419, Name: 'Tybo', Description: 'Danish cheese similar to Samsø with mild flavor.', Milk_Type: 'Cow', Origin_Country: 'Denmark', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Versatile table cheese' },
  { Cheese_ID: 420, Name: 'Oltermanni', Description: 'Finnish mild cheese with elastic texture.', Milk_Type: 'Cow', Origin_Country: 'Finland', Rind_Type: 'None', Texture: 'semi-hard', FlavorBySource: 'Cow: Finnish staple, mild and buttery' },

  // MORE MIDDLE EASTERN & MEDITERRANEAN (421-440)
  { Cheese_ID: 421, Name: 'Shanklish with Za\'atar', Description: 'Lebanese cheese rolled in thyme and spices.', Milk_Type: 'Cow', Origin_Country: 'Middle East', Rind_Type: 'None', Texture: 'crumbly', FlavorBySource: 'Cow: Fermented balls with spice coating' },
  { Cheese_ID: 422, Name: 'Kashkaval Vitosha', Description: 'Bulgarian yellow cheese with semi-hard texture.', Milk_Type: 'Sheep', Origin_Country: 'Bulgaria', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Sheep: Balkan classic, slightly tangy' },
  { Cheese_ID: 423, Name: 'Sirene', Description: 'Bulgarian white brined cheese similar to feta.', Milk_Type: 'Sheep', Origin_Country: 'Bulgaria', Rind_Type: 'None', Texture: 'crumbly', FlavorBySource: 'Sheep: Traditional breakfast cheese' },
  { Cheese_ID: 424, Name: 'Katiki Domokou', Description: 'Greek soft cheese with creamy, tangy flavor.', Milk_Type: 'Goat', Origin_Country: 'Greece', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Goat: Spreadable Greek cheese' },
  { Cheese_ID: 425, Name: 'Kopanisti', Description: 'Greek spicy fermented cheese with pungent flavor.', Milk_Type: 'Cow', Origin_Country: 'Greece', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Cycladic island specialty' },
  { Cheese_ID: 426, Name: 'Manouri', Description: 'Greek whey cheese similar to ricotta, creamy.', Milk_Type: 'Sheep', Origin_Country: 'Greece', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Sheep: Sweet, delicate whey cheese' },
  { Cheese_ID: 427, Name: 'Mizithra Fresh', Description: 'Greek fresh whey cheese, soft and mild.', Milk_Type: 'Sheep', Origin_Country: 'Greece', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Sheep: Cretan ricotta-style' },
  { Cheese_ID: 428, Name: 'Mizithra Aged', Description: 'Greek aged whey cheese, hard and salty.', Milk_Type: 'Sheep', Origin_Country: 'Greece', Rind_Type: 'None', Texture: 'hard', FlavorBySource: 'Sheep: Dried for grating' },
  { Cheese_ID: 429, Name: 'Anthotyros', Description: 'Greek whey cheese with delicate flavor.', Milk_Type: 'Sheep', Origin_Country: 'Greece', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Sheep: Flower cheese, light and fresh' },
  { Cheese_ID: 430, Name: 'Kefalotyri', Description: 'Greek hard cheese for grating and frying.', Milk_Type: 'Sheep', Origin_Country: 'Greece', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Sheep: Salty, sharp, perfect for saganaki' },
  { Cheese_ID: 431, Name: 'Xynomyzithra', Description: 'Greek sour whey cheese with tangy flavor.', Milk_Type: 'Sheep', Origin_Country: 'Greece', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Sheep: Cretan sour cheese' },
  { Cheese_ID: 432, Name: 'Batzos', Description: 'Greek semi-hard cheese from Macedonia.', Milk_Type: 'Mixed', Origin_Country: 'Greece', Rind_Type: 'None', Texture: 'semi-hard', FlavorBySource: 'Sheep/Goat: Preserved in brine' },
  { Cheese_ID: 433, Name: 'Sfela', Description: 'Greek whey cheese from Peloponnese.', Milk_Type: 'Sheep', Origin_Country: 'Greece', Rind_Type: 'None', Texture: 'semi-hard', FlavorBySource: 'Sheep: Salty, firm, traditional' },
  { Cheese_ID: 434, Name: 'Touloumotiri', Description: 'Greek cheese aged in goatskin bag.', Milk_Type: 'Mixed', Origin_Country: 'Greece', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Sheep/Goat: Pungent, creamy' },
  { Cheese_ID: 435, Name: 'Xynotyri', Description: 'Greek sour cheese from Cyclades islands.', Milk_Type: 'Mixed', Origin_Country: 'Greece', Rind_Type: 'None', Texture: 'crumbly', FlavorBySource: 'Sheep/Goat: Sharp, acidic' },
  { Cheese_ID: 437, Name: 'Anari', Description: 'Cypriot whey cheese similar to ricotta.', Milk_Type: 'Mixed', Origin_Country: 'Cyprus', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Sheep/Goat: Fresh, mild whey cheese' },
  { Cheese_ID: 438, Name: 'Kaskavall', Description: 'Balkan pasta filata cheese, stretchy when heated.', Milk_Type: 'Sheep', Origin_Country: 'Middle East', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Sheep: Regional variation of Kashkaval' },
  { Cheese_ID: 439, Name: 'Jibne Bel Mafluf', Description: 'Braided Middle Eastern cheese preserved in brine.', Milk_Type: 'Cow', Origin_Country: 'Middle East', Rind_Type: 'None', Texture: 'semi-hard', FlavorBySource: 'Cow: Twisted rope-like cheese' },
  { Cheese_ID: 440, Name: 'Ackawi Cheese Rolls', Description: 'Lebanese cheese rolled into cylinders.', Milk_Type: 'Cow', Origin_Country: 'Middle East', Rind_Type: 'None', Texture: 'semi-soft', FlavorBySource: 'Cow: Mild, slightly elastic' },

  // LATIN AMERICAN EXPANSION (441-460)
  { Cheese_ID: 441, Name: 'Panela', Description: 'Mexican fresh cheese that doesn\'t melt, perfect for frying.', Milk_Type: 'Cow', Origin_Country: 'Mexico', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Fresh basket cheese' },
  { Cheese_ID: 442, Name: 'Queso Menonita', Description: 'Mexican Mennonite cheese similar to Gouda.', Milk_Type: 'Cow', Origin_Country: 'Mexico', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Chihuahua cheese, excellent melter' },
  { Cheese_ID: 443, Name: 'Queso Panela with Chili', Description: 'Mexican fresh cheese studded with jalapeños.', Milk_Type: 'Cow', Origin_Country: 'Mexico', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Spicy variation' },
  { Cheese_ID: 444, Name: 'Queso Enchilado', Description: 'Mexican cheese rolled in chili powder.', Milk_Type: 'Cow', Origin_Country: 'Mexico', Rind_Type: 'None', Texture: 'semi-hard', FlavorBySource: 'Cow: Spicy exterior, mild interior' },
  { Cheese_ID: 445, Name: 'Queso de Bola', Description: 'Mexican Edam-style cheese wrapped in red wax.', Milk_Type: 'Cow', Origin_Country: 'Mexico', Rind_Type: 'Waxed', Texture: 'semi-hard', FlavorBySource: 'Cow: Dutch-influenced Mexican cheese' },
  { Cheese_ID: 446, Name: 'Queso Manchego Mexican', Description: 'Mexican cheese inspired by Spanish Manchego.', Milk_Type: 'Cow', Origin_Country: 'Mexico', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Mexican interpretation of Spanish classic' },
  { Cheese_ID: 447, Name: 'Quesillo Oaxaqueño', Description: 'Mexican string cheese ball, stringy and mild.', Milk_Type: 'Cow', Origin_Country: 'Mexico', Rind_Type: 'None', Texture: 'semi-soft', FlavorBySource: 'Cow: Hand-stretched into balls' },
  { Cheese_ID: 448, Name: 'Queso de Puna', Description: 'Bolivian fresh cheese from high Andes.', Milk_Type: 'Cow', Origin_Country: 'Bolivia', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: High altitude cheese' },
  { Cheese_ID: 449, Name: 'Queso Llanero', Description: 'Venezuelan plains cheese with firm texture.', Milk_Type: 'Cow', Origin_Country: 'Venezuela', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Aged cheese from cattle country' },
  { Cheese_ID: 450, Name: 'Queso Campesino', Description: 'Colombian farmer cheese, fresh and crumbly.', Milk_Type: 'Cow', Origin_Country: 'Colombia', Rind_Type: 'None', Texture: 'crumbly', FlavorBySource: 'Cow: Rural Colombian staple' },
  { Cheese_ID: 451, Name: 'Queso Costeño', Description: 'Colombian coastal cheese, salty and firm.', Milk_Type: 'Cow', Origin_Country: 'Colombia', Rind_Type: 'None', Texture: 'hard', FlavorBySource: 'Cow: Caribbean coast cheese' },
  { Cheese_ID: 452, Name: 'Queso Doble Crema', Description: 'Colombian double cream cheese, rich and soft.', Milk_Type: 'Cow', Origin_Country: 'Colombia', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Enriched fresh cheese' },
  { Cheese_ID: 453, Name: 'Queso Guayanés', Description: 'Venezuelan cheese from Guayana region.', Milk_Type: 'Cow', Origin_Country: 'Venezuela', Rind_Type: 'None', Texture: 'semi-hard', FlavorBySource: 'Cow: Regional specialty' },
  { Cheese_ID: 454, Name: 'Quesillo Andino', Description: 'Andean string cheese with smoky flavor.', Milk_Type: 'Cow', Origin_Country: 'Ecuador', Rind_Type: 'None', Texture: 'semi-soft', FlavorBySource: 'Cow: Mountain cheese often smoked' },
  { Cheese_ID: 455, Name: 'Queso Fresco Salvadoreño', Description: 'Salvadoran fresh cheese, mild and crumbly.', Milk_Type: 'Cow', Origin_Country: 'El Salvador', Rind_Type: 'None', Texture: 'crumbly', FlavorBySource: 'Cow: Central American staple' },
  { Cheese_ID: 456, Name: 'Queso Duro Blando', Description: 'Nicaraguan cheese that\'s hard outside, soft inside.', Milk_Type: 'Cow', Origin_Country: 'Nicaragua', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Unique dual texture' },
  { Cheese_ID: 457, Name: 'Queso Fundido Cheese', Description: 'Mexican melted cheese blend for dipping.', Milk_Type: 'Cow', Origin_Country: 'Mexico', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Melting cheese for fondues' },
  { Cheese_ID: 458, Name: 'Cuajada', Description: 'Latin American fresh curd cheese, delicate.', Milk_Type: 'Cow', Origin_Country: 'Colombia', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Fresh milk curd, sweet' },
  { Cheese_ID: 459, Name: 'Quesadilla Cheese', Description: 'Salvadoran cheese with rice flour and milk.', Milk_Type: 'Cow', Origin_Country: 'El Salvador', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Sweet cheese for desserts' },
  { Cheese_ID: 460, Name: 'Palmito', Description: 'Ecuadorian fresh cheese similar to queso fresco.', Milk_Type: 'Cow', Origin_Country: 'Ecuador', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Coastal Ecuadorian cheese' },

  // ASIAN & OCEANIAN EXPANSION (461-480)
  { Cheese_ID: 461, Name: 'Hokkaido Raclette', Description: 'Japanese raclette-style cheese with excellent melt.', Milk_Type: 'Cow', Origin_Country: 'Japan', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Cow: Japanese interpretation of Swiss classic' },
  { Cheese_ID: 462, Name: 'Yoichi Blue', Description: 'Japanese blue cheese with delicate flavor.', Milk_Type: 'Cow', Origin_Country: 'Japan', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Cow: Hokkaido blue, refined taste' },
  { Cheese_ID: 463, Name: 'Furano Wine Cheddar', Description: 'Japanese cheddar soaked in local wine.', Milk_Type: 'Cow', Origin_Country: 'Japan', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Wine-infused Japanese cheddar' },
  { Cheese_ID: 464, Name: 'Tokachi Herb', Description: 'Japanese cheese studded with local herbs.', Milk_Type: 'Cow', Origin_Country: 'Japan', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Hokkaido herbs create unique flavor' },
  { Cheese_ID: 465, Name: 'Hanabatake', Description: 'Japanese washed-rind cheese with floral notes.', Milk_Type: 'Cow', Origin_Country: 'Japan', Rind_Type: 'Washed', Texture: 'soft', FlavorBySource: 'Cow: "Flower field" aromatic cheese' },
  { Cheese_ID: 466, Name: 'Mongolian Dried Curd', Description: 'Hard Mongolian cheese snack, very shelf-stable.', Milk_Type: 'Yak', Origin_Country: 'Mongolia', Rind_Type: 'None', Texture: 'hard', FlavorBySource: 'Yak: Traditional nomadic cheese' },
  { Cheese_ID: 467, Name: 'Tarag Cheese', Description: 'Mongolian fermented cheese with tangy flavor.', Milk_Type: 'Mixed', Origin_Country: 'Mongolia', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Mixed: Yogurt-based cheese' },
  { Cheese_ID: 468, Name: 'Khailmag', Description: 'Mongolian clotted cream cheese, rich.', Milk_Type: 'Yak', Origin_Country: 'Mongolia', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Yak: Cream-based cheese' },
  { Cheese_ID: 469, Name: 'Indonesian Kwalik', Description: 'Indonesian fresh cheese from Toraja.', Milk_Type: 'Buffalo', Origin_Country: 'Indonesia', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Buffalo: Tropical buffalo cheese' },
  { Cheese_ID: 470, Name: 'Philippine Kesong Puti', Description: 'Filipino white cheese from carabao milk.', Milk_Type: 'Buffalo', Origin_Country: 'Philippines', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Buffalo: Fresh water buffalo cheese' },
  { Cheese_ID: 471, Name: 'Thai Buffalo Cheese', Description: 'Thai fresh cheese with mild flavor.', Milk_Type: 'Buffalo', Origin_Country: 'Thailand', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Buffalo: Southeast Asian buffalo milk' },
  { Cheese_ID: 472, Name: 'Bhutanese Datshi Cheese', Description: 'Bhutanese cheese used in national dishes.', Milk_Type: 'Yak', Origin_Country: 'Bhutan', Rind_Type: 'None', Texture: 'semi-hard', FlavorBySource: 'Yak: Himalayan cheese for cooking' },
  { Cheese_ID: 473, Name: 'King Island Cape Wickham', Description: 'Australian brie-style cheese with rich flavor.', Milk_Type: 'Cow', Origin_Country: 'Australia', Rind_Type: 'Bloomy', Texture: 'soft', FlavorBySource: 'Cow: Tasmanian triple cream' },
  { Cheese_ID: 474, Name: 'Prom Country Cheddar', Description: 'Australian farmhouse cheddar with sharp flavor.', Milk_Type: 'Cow', Origin_Country: 'Australia', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Victoria cheddar' },
  { Cheese_ID: 475, Name: 'Herb-Marinated Feta', Description: 'Australian sheep and goat feta in herb-infused oil.', Milk_Type: 'Mixed', Origin_Country: 'Australia', Rind_Type: 'None', Texture: 'crumbly', FlavorBySource: 'Sheep/Goat: Herb-marinated Australian feta' },
  { Cheese_ID: 476, Name: 'Woodside Edith', Description: 'Australian goat cheese with ash layer.', Milk_Type: 'Goat', Origin_Country: 'Australia', Rind_Type: 'Bloomy', Texture: 'soft', FlavorBySource: 'Goat: Adelaide Hills chèvre' },
  // REMOVED: Branded Australian/NZ cheeses (Holy Goat La Luna, Riverine Blue, Kingsmeade Camembert, Kapiti Aorangi)

  // FINAL EXPANSION TO 500 (481-500)
  // REMOVED: Branded New Zealand cheeses (Puhoi Valley Blue Vein, Barry's Bay Cheddar, Evansdale Farmhouse Brie)
  // REMOVED: Branded Irish cheeses (Crannog Smoked Cheese, Carlow Farmhouse, St. Killian, Glebe Brethan, Mine-Gabhar, Cratloe Hills)
  // REMOVED: Lavistown (branded)
  { Cheese_ID: 491, Name: 'Cardo', Description: 'Portuguese sheep cheese with cardoon rennet.', Milk_Type: 'Sheep', Origin_Country: 'Portugal', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Sheep: Vegetable rennet creates bitter notes' },
  { Cheese_ID: 492, Name: 'Requeijão Serra da Estrela', Description: 'Portuguese spreadable cheese from whey.', Milk_Type: 'Sheep', Origin_Country: 'Portugal', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Sheep: Byproduct of Serra da Estrela' },
  { Cheese_ID: 493, Name: 'Castelo Branco', Description: 'Portuguese cheese with thistle rennet.', Milk_Type: 'Mixed', Origin_Country: 'Portugal', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Sheep/Goat: Creamy with vegetable rennet' },
  { Cheese_ID: 494, Name: 'Pico', Description: 'Portuguese cheese from Azores island.', Milk_Type: 'Cow', Origin_Country: 'Portugal', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Island terroir creates unique flavor' },
  { Cheese_ID: 495, Name: 'Queijo Fresco Açoriano', Description: 'Azorean fresh cheese with mild flavor.', Milk_Type: 'Cow', Origin_Country: 'Portugal', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Island fresh cheese' },
  { Cheese_ID: 496, Name: 'Romanian Telemea', Description: 'Romanian white brined cheese similar to feta.', Milk_Type: 'Sheep', Origin_Country: 'Romania', Rind_Type: 'None', Texture: 'crumbly', FlavorBySource: 'Sheep: Balkan feta-style' },
  { Cheese_ID: 497, Name: 'Romanian Brânză de Burduf', Description: 'Romanian cheese aged in pine bark.', Milk_Type: 'Sheep', Origin_Country: 'Romania', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Sheep: Bark creates resinous flavor' },
  { Cheese_ID: 498, Name: 'Polish Oscypek', Description: 'Polish smoked sheep cheese from Tatra mountains.', Milk_Type: 'Sheep', Origin_Country: 'Poland', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Sheep: Smoked in mountain huts' },
  { Cheese_ID: 499, Name: 'Czech Olomoucké Tvarůžky', Description: 'Czech ripened cheese with very strong odor.', Milk_Type: 'Cow', Origin_Country: 'Czech Republic', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Extremely pungent, low fat' },
  { Cheese_ID: 500, Name: 'Hungarian Trappist', Description: 'Hungarian monastery cheese with mild flavor.', Milk_Type: 'Cow', Origin_Country: 'Hungary', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Port Salut-style Hungarian cheese' },

  // EXPANDED GENERIC CHEESE DATABASE (501-600)
  
  // MORE ITALIAN VARIETIES (501-520)
  { Cheese_ID: 501, Name: 'Ricotta', Description: 'Fresh Italian whey cheese, light and creamy. Essential for lasagna and cannoli.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Mild, slightly sweet whey cheese' },
  { Cheese_ID: 503, Name: 'Fresh Mozzarella', Description: 'Soft Italian cheese with milky flavor, perfect for Caprese salad.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Fresh, milky, delicate' },
  { Cheese_ID: 510, Name: 'Cacioricotta', Description: 'Southern Italian cheese that\'s half cheese, half ricotta.', Milk_Type: 'Goat', Origin_Country: 'Italy', Rind_Type: 'None', Texture: 'crumbly', FlavorBySource: 'Goat: Tangy, semi-dry texture' },
  { Cheese_ID: 518, Name: 'Casciotta', Description: 'Umbrian cheese with delicate, slightly sweet flavor.', Milk_Type: 'Mixed', Origin_Country: 'Italy', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Sheep/Cow: Gentle, buttery' },
  { Cheese_ID: 520, Name: 'Squacquerone', Description: 'Spreadable cheese from Romagna, creamy and tangy.', Milk_Type: 'Cow', Origin_Country: 'Italy', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Fresh, acidic, spreadable' },

  // MORE FRENCH VARIETIES (521-540)
  { Cheese_ID: 521, Name: 'Saint-Marcellin', Description: 'Small French cheese from Dauphiné, creamy and mild.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'Bloomy', Texture: 'soft', FlavorBySource: 'Cow: Delicate, slightly nutty' },
  { Cheese_ID: 538, Name: 'Bleu des Causses', Description: 'Blue cheese from limestone caves with sharp flavor.', Milk_Type: 'Cow', Origin_Country: 'France', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Cow: Bold, spicy blue' },
  // MORE ASIAN VARIETIES (541-560)
  { Cheese_ID: 541, Name: 'Afghan Qurut', Description: 'Dried yogurt balls from Afghanistan, salty and tangy.', Milk_Type: 'Cow', Origin_Country: 'Afghanistan', Rind_Type: 'None', Texture: 'hard', FlavorBySource: 'Cow: Intense, salty, sun-dried' },
  { Cheese_ID: 542, Name: 'Pakistani Khoya', Description: 'Condensed milk cheese used in sweets.', Milk_Type: 'Buffalo', Origin_Country: 'Pakistan', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Buffalo: Sweet, rich, caramelized' },
  { Cheese_ID: 543, Name: 'Kesong Puti', Description: 'Filipino white cheese made from carabao milk.', Milk_Type: 'Buffalo', Origin_Country: 'Philippines', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Buffalo: Fresh, slightly salty' },
  { Cheese_ID: 544, Name: 'Vietnamese Cheese', Description: 'Fresh Southeast Asian cheese similar to mozzarella.', Milk_Type: 'Cow', Origin_Country: 'Vietnam', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Mild, slightly tangy' },
  { Cheese_ID: 545, Name: 'Kazakh Qurt', Description: 'Central Asian dried cheese balls, very salty.', Milk_Type: 'Mixed', Origin_Country: 'Kazakhstan', Rind_Type: 'None', Texture: 'hard', FlavorBySource: 'Sheep/Cow: Intense, preserved for travel' },
  { Cheese_ID: 546, Name: 'Kyrgyz Kurut', Description: 'Fermented dried cheese from Kyrgyzstan.', Milk_Type: 'Yak', Origin_Country: 'Kyrgyzstan', Rind_Type: 'None', Texture: 'hard', FlavorBySource: 'Yak: Sour, salty, nomadic tradition' },
  { Cheese_ID: 547, Name: 'Georgian Sulguni', Description: 'Brined Georgian cheese with stretchy texture.', Milk_Type: 'Cow', Origin_Country: 'Georgia', Rind_Type: 'None', Texture: 'semi-soft', FlavorBySource: 'Cow: Salty, elastic, fresh' },
  { Cheese_ID: 548, Name: 'Georgian Imeruli', Description: 'Fresh Georgian cheese similar to mozzarella.', Milk_Type: 'Cow', Origin_Country: 'Georgia', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Mild, slightly sour' },
  { Cheese_ID: 549, Name: 'Armenian String Cheese', Description: 'Braided Armenian cheese, often with spices.', Milk_Type: 'Cow', Origin_Country: 'Armenia', Rind_Type: 'None', Texture: 'semi-hard', FlavorBySource: 'Cow: Salty, stringy, brined' },
  { Cheese_ID: 550, Name: 'Uzbek Suzma', Description: 'Strained yogurt cheese from Uzbekistan.', Milk_Type: 'Cow', Origin_Country: 'Uzbekistan', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Tangy, spreadable' },
  { Cheese_ID: 551, Name: 'Tajik Qurut', Description: 'Dried cheese balls from Tajikistan.', Milk_Type: 'Goat', Origin_Country: 'Tajikistan', Rind_Type: 'None', Texture: 'hard', FlavorBySource: 'Goat: Sour, concentrated' },
  { Cheese_ID: 552, Name: 'Turkish Hellim', Description: 'Cypriot-style grilling cheese popular in Turkey.', Milk_Type: 'Sheep', Origin_Country: 'Turkey', Rind_Type: 'None', Texture: 'semi-hard', FlavorBySource: 'Sheep: Salty, squeaky, grillable' },
  { Cheese_ID: 553, Name: 'Turkish Tulum', Description: 'Turkish cheese aged in animal skin bags.', Milk_Type: 'Goat', Origin_Country: 'Turkey', Rind_Type: 'None', Texture: 'crumbly', FlavorBySource: 'Goat: Sharp, pungent from skin aging' },
  { Cheese_ID: 554, Name: 'Turkish Beyaz Peynir', Description: 'White Turkish brined cheese, feta-style.', Milk_Type: 'Sheep', Origin_Country: 'Turkey', Rind_Type: 'None', Texture: 'crumbly', FlavorBySource: 'Sheep: Salty, tangy, breakfast staple' },
  { Cheese_ID: 555, Name: 'Turkish Kashar', Description: 'Yellow Turkish cheese with mild, buttery flavor.', Milk_Type: 'Sheep', Origin_Country: 'Turkey', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Sheep: Smooth, slightly elastic' },
  { Cheese_ID: 556, Name: 'Iranian Lighvan', Description: 'Iranian brined cheese from Azerbaijan region.', Milk_Type: 'Sheep', Origin_Country: 'Iran', Rind_Type: 'None', Texture: 'semi-soft', FlavorBySource: 'Sheep: Salty, creamy, traditional' },
  { Cheese_ID: 557, Name: 'Iranian Liqvan', Description: 'White Iranian cheese aged in brine.', Milk_Type: 'Sheep', Origin_Country: 'Iran', Rind_Type: 'None', Texture: 'crumbly', FlavorBySource: 'Sheep: Sharp, salty' },
  { Cheese_ID: 558, Name: 'Israeli White Cheese', Description: 'Fresh Israeli cheese similar to quark.', Milk_Type: 'Cow', Origin_Country: 'Israel', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Mild, spreadable' },
  { Cheese_ID: 559, Name: 'Israeli Tzfat', Description: 'Semi-hard Israeli cheese with mild flavor.', Milk_Type: 'Cow', Origin_Country: 'Israel', Rind_Type: 'None', Texture: 'semi-hard', FlavorBySource: 'Cow: Salty, slightly rubbery' },
  { Cheese_ID: 560, Name: 'Bhutanese Chhurpi Soft', Description: 'Soft version of Himalayan cheese, creamy.', Milk_Type: 'Yak', Origin_Country: 'Bhutan', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Yak: Rich, high altitude milk' },

  // MORE AFRICAN VARIETIES (561-575)
  { Cheese_ID: 561, Name: 'Kenyan Fresh Cheese', Description: 'East African fresh cheese, mild and crumbly.', Milk_Type: 'Cow', Origin_Country: 'Kenya', Rind_Type: 'None', Texture: 'crumbly', FlavorBySource: 'Cow: Fresh, simple' },
  { Cheese_ID: 562, Name: 'Ethiopian Ayib', Description: 'Fresh Ethiopian cottage cheese used in traditional dishes.', Milk_Type: 'Cow', Origin_Country: 'Ethiopia', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Mild, crumbly, acid-set' },
  { Cheese_ID: 563, Name: 'Nigerian Wara', Description: 'Fresh Nigerian cheese similar to tofu texture.', Milk_Type: 'Cow', Origin_Country: 'Nigeria', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Bland, versatile' },
  { Cheese_ID: 564, Name: 'Moroccan Jben', Description: 'Fresh Moroccan cheese eaten for breakfast.', Milk_Type: 'Goat', Origin_Country: 'Morocco', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Goat: Mild, slightly tangy' },
  { Cheese_ID: 565, Name: 'Tunisian Testouri', Description: 'Tunisian semi-hard cheese with sharp flavor.', Milk_Type: 'Sheep', Origin_Country: 'Tunisia', Rind_Type: 'None', Texture: 'semi-hard', FlavorBySource: 'Sheep: Salty, firm' },
  { Cheese_ID: 566, Name: 'Algerian Bouhezza', Description: 'Algerian fermented cheese with strong flavor.', Milk_Type: 'Goat', Origin_Country: 'Algeria', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Goat: Pungent, traditional' },
  { Cheese_ID: 567, Name: 'Somali Cheese', Description: 'East African camel milk cheese, rare and unique.', Milk_Type: 'Camel', Origin_Country: 'Somalia', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Camel: Salty, slightly sweet' },
  { Cheese_ID: 568, Name: 'Zimbabwean Cheddar-Style', Description: 'Southern African cheddar-style cheese.', Milk_Type: 'Cow', Origin_Country: 'Zimbabwe', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Mild to sharp depending on age' },
  { Cheese_ID: 569, Name: 'Ghanaian Fresh Cheese', Description: 'West African fresh cheese from cow milk.', Milk_Type: 'Cow', Origin_Country: 'Ghana', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Simple, mild' },
  { Cheese_ID: 570, Name: 'Sudanese Gibna Bayda', Description: 'Sudanese white cheese, fresh and salty.', Milk_Type: 'Cow', Origin_Country: 'Sudan', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Brined, breakfast cheese' },
  { Cheese_ID: 571, Name: 'Libyan Cheese', Description: 'North African fresh cheese from sheep milk.', Milk_Type: 'Sheep', Origin_Country: 'Libya', Rind_Type: 'None', Texture: 'crumbly', FlavorBySource: 'Sheep: Salty, crumbly' },
  { Cheese_ID: 572, Name: 'Senegalese Cheese', Description: 'West African cow milk cheese.', Milk_Type: 'Cow', Origin_Country: 'Senegal', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Fresh, mild' },
  { Cheese_ID: 573, Name: 'Tanzanian Fresh Cheese', Description: 'East African fresh cheese from cow milk.', Milk_Type: 'Cow', Origin_Country: 'Tanzania', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Simple, versatile' },
  { Cheese_ID: 574, Name: 'Ugandan Cheese', Description: 'Fresh cheese from Uganda, mild flavor.', Milk_Type: 'Cow', Origin_Country: 'Uganda', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Delicate, fresh' },
  { Cheese_ID: 575, Name: 'Mauritanian Camel Cheese', Description: 'Rare camel milk cheese from Mauritania.', Milk_Type: 'Camel', Origin_Country: 'Mauritania', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Camel: Desert nomadic tradition' },

  // MORE LATIN AMERICAN VARIETIES (576-590)
  { Cheese_ID: 576, Name: 'Queso de Hoja', Description: 'Puerto Rican layered cheese that peels into sheets.', Milk_Type: 'Cow', Origin_Country: 'Puerto Rico', Rind_Type: 'None', Texture: 'semi-soft', FlavorBySource: 'Cow: Mild, buttery, peelable' },
  { Cheese_ID: 577, Name: 'Queso del País', Description: 'Dominican fresh cheese, crumbly and salty.', Milk_Type: 'Cow', Origin_Country: 'Dominican Republic', Rind_Type: 'None', Texture: 'crumbly', FlavorBySource: 'Cow: Salty, fresh' },
  { Cheese_ID: 578, Name: 'Queso Crema', Description: 'Central American cream cheese, spreadable and mild.', Milk_Type: 'Cow', Origin_Country: 'Honduras', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Rich, creamy' },
  { Cheese_ID: 579, Name: 'Queso Molido', Description: 'Guatemalan grated aged cheese.', Milk_Type: 'Cow', Origin_Country: 'Guatemala', Rind_Type: 'None', Texture: 'hard', FlavorBySource: 'Cow: Dry, salty, grating cheese' },
  { Cheese_ID: 580, Name: 'Queso Seco', Description: 'Dry Central American cheese for grating.', Milk_Type: 'Cow', Origin_Country: 'Costa Rica', Rind_Type: 'None', Texture: 'hard', FlavorBySource: 'Cow: Aged, crumbly, salty' },
  { Cheese_ID: 581, Name: 'Queso Palmita', Description: 'Costa Rican cheese wrapped in palm leaves.', Milk_Type: 'Cow', Origin_Country: 'Costa Rica', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Leaf-wrapped, traditional' },
  { Cheese_ID: 582, Name: 'Queso Ahumado', Description: 'Smoked Latin American cheese with rich flavor.', Milk_Type: 'Cow', Origin_Country: 'Panama', Rind_Type: 'None', Texture: 'semi-hard', FlavorBySource: 'Cow: Smoky, savory' },
  { Cheese_ID: 583, Name: 'Queso de Cabra', Description: 'Latin American goat cheese, fresh and tangy.', Milk_Type: 'Goat', Origin_Country: 'Uruguay', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Goat: Acidic, spreadable' },
  { Cheese_ID: 584, Name: 'Queso Semiduro', Description: 'Semi-hard Latin American table cheese.', Milk_Type: 'Cow', Origin_Country: 'Paraguay', Rind_Type: 'None', Texture: 'semi-hard', FlavorBySource: 'Cow: Mild, versatile' },
  { Cheese_ID: 585, Name: 'Queijo do Serro', Description: 'Brazilian artisan cheese from Minas Gerais mountains.', Milk_Type: 'Cow', Origin_Country: 'Brazil', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Tangy, complex terroir' },
  { Cheese_ID: 586, Name: 'Queijo Canastra', Description: 'Brazilian cheese with sharp, tangy flavor.', Milk_Type: 'Cow', Origin_Country: 'Brazil', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Raw milk, traditional' },
  { Cheese_ID: 587, Name: 'Queijo Prato', Description: 'Brazilian yellow cheese similar to Danish cheese.', Milk_Type: 'Cow', Origin_Country: 'Brazil', Rind_Type: 'None', Texture: 'semi-soft', FlavorBySource: 'Cow: Mild, buttery, melts well' },
  { Cheese_ID: 588, Name: 'Queijo Polenguinho', Description: 'Brazilian processed cheese in wedges.', Milk_Type: 'Cow', Origin_Country: 'Brazil', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Mild, kid-friendly' },
  { Cheese_ID: 589, Name: 'Queso de Cincho', Description: 'Ecuadorian cheese wrapped in bark.', Milk_Type: 'Cow', Origin_Country: 'Ecuador', Rind_Type: 'None', Texture: 'semi-soft', FlavorBySource: 'Cow: Fresh, slightly acidic' },
  { Cheese_ID: 590, Name: 'Queso Maduro', Description: 'Aged Latin American cheese with sharp bite.', Milk_Type: 'Cow', Origin_Country: 'Bolivia', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Concentrated, salty' },

  // MORE EUROPEAN & OTHER VARIETIES (591-600)
  { Cheese_ID: 591, Name: 'Cottage Cheese', Description: 'Fresh curd cheese with lumpy texture, mild and creamy.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Fresh, mild, high protein' },
  { Cheese_ID: 592, Name: 'Farmers Cheese', Description: 'Pressed cottage cheese, firmer and drier.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'None', Texture: 'crumbly', FlavorBySource: 'Cow: Mild, crumbly, versatile' },
  { Cheese_ID: 593, Name: 'Brick Cheese', Description: 'Wisconsin cheese with mild to sharp flavor.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'Washed', Texture: 'semi-soft', FlavorBySource: 'Cow: Sweet when young, pungent when aged' },
  { Cheese_ID: 594, Name: 'Limburger American', Description: 'American-made Limburger with strong aroma.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'Washed', Texture: 'soft', FlavorBySource: 'Cow: Pungent, creamy' },
  { Cheese_ID: 595, Name: 'Goat Cheese Log', Description: 'Simple fresh goat cheese in log shape.', Milk_Type: 'Goat', Origin_Country: 'United States', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Goat: Tangy, spreadable, versatile' },
  { Cheese_ID: 596, Name: 'Sheep Feta', Description: 'Traditional sheep\'s milk feta, crumbly and tangy.', Milk_Type: 'Sheep', Origin_Country: 'Greece', Rind_Type: 'None', Texture: 'crumbly', FlavorBySource: 'Sheep: Salty, rich, authentic' },
  { Cheese_ID: 597, Name: 'Cow Feta', Description: 'Milder feta made from cow\'s milk.', Milk_Type: 'Cow', Origin_Country: 'Greece', Rind_Type: 'None', Texture: 'crumbly', FlavorBySource: 'Cow: Less tangy, creamier than sheep' },
  { Cheese_ID: 598, Name: 'Smoked Cheese Generic', Description: 'Generic smoked cheese with rich, savory flavor.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'None', Texture: 'semi-hard', FlavorBySource: 'Cow: Wood-smoked, versatile' },
  { Cheese_ID: 599, Name: 'Blue Cheese Generic', Description: 'Generic blue cheese with tangy, sharp flavor.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'Natural', Texture: 'crumbly', FlavorBySource: 'Cow: Bold blue mold character' },
  { Cheese_ID: 600, Name: 'Fresh Chèvre', Description: 'Simple fresh goat cheese, tangy and spreadable.', Milk_Type: 'Goat', Origin_Country: 'France', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Goat: Clean, bright, lemony' },

  // REINDEER MILK CHEESES (601-607)
  { Cheese_ID: 601, Name: 'Sami Reindeer Cheese', Description: 'Traditional Sami cheese from reindeer milk, extremely rare and rich.', Milk_Type: 'Reindeer', Origin_Country: 'Norway', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Reindeer: Intensely rich, sweet, high fat content from Arctic grazing' },
  { Cheese_ID: 602, Name: 'Finnish Reindeer Cheese', Description: 'Finnish artisan cheese from Lapland reindeer herds.', Milk_Type: 'Reindeer', Origin_Country: 'Finland', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Reindeer: Sweet, creamy, herbal notes from tundra diet' },
  { Cheese_ID: 603, Name: 'Swedish Reindeer Fresh', Description: 'Fresh Swedish reindeer cheese, soft and spreadable.', Milk_Type: 'Reindeer', Origin_Country: 'Sweden', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Reindeer: Rich, buttery, extremely high fat' },
  { Cheese_ID: 604, Name: 'Lapland Aged Reindeer', Description: 'Aged reindeer cheese from northern Scandinavia.', Milk_Type: 'Reindeer', Origin_Country: 'Finland', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Reindeer: Concentrated sweetness, complex from aging' },
  { Cheese_ID: 605, Name: 'Russian Reindeer Cheese', Description: 'Siberian reindeer cheese from indigenous herders.', Milk_Type: 'Reindeer', Origin_Country: 'Russia', Rind_Type: 'None', Texture: 'semi-soft', FlavorBySource: 'Reindeer: Dense, fatty, traditional nomadic' },
  { Cheese_ID: 606, Name: 'Norwegian Reindeer Cream', Description: 'Cream cheese from Norwegian reindeer milk.', Milk_Type: 'Reindeer', Origin_Country: 'Norway', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Reindeer: Luxuriously creamy, sweet' },
  { Cheese_ID: 607, Name: 'Sami Smoked Reindeer', Description: 'Traditional smoked reindeer cheese from Sami culture.', Milk_Type: 'Reindeer', Origin_Country: 'Sweden', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Reindeer: Smoky, rich, preserves well in Arctic conditions' },

  // MOOSE/ELK MILK CHEESES (608-612)
  { Cheese_ID: 608, Name: 'Swedish Moose Cheese', Description: 'Ultra-rare Swedish moose cheese from Elk House farm.', Milk_Type: 'Moose', Origin_Country: 'Sweden', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Moose: Mild, high protein, delicate forest flavors' },
  { Cheese_ID: 609, Name: 'Russian Elk Cheese', Description: 'Traditional Russian elk cheese from Siberian moose.', Milk_Type: 'Moose', Origin_Country: 'Russia', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Moose: Rich, slightly gamey, wild herbs' },
  { Cheese_ID: 610, Name: 'Moose Cream Cheese', Description: 'Swedish fresh moose cream cheese, incredibly rare.', Milk_Type: 'Moose', Origin_Country: 'Sweden', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Moose: Creamy, mild, luxurious texture' },
  { Cheese_ID: 611, Name: 'Aged Moose Cheese', Description: 'Hard aged moose cheese, world\'s rarest aged cheese.', Milk_Type: 'Moose', Origin_Country: 'Sweden', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Moose: Complex, nutty, concentrated forest essence' },
  { Cheese_ID: 612, Name: 'Moose Blue', Description: 'Experimental blue cheese from moose milk.', Milk_Type: 'Moose', Origin_Country: 'Sweden', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Moose: Blue mold character with wild undertones' },

  // DONKEY MILK CHEESES (613-617)
  { Cheese_ID: 613, Name: 'Pule', Description: 'World\'s most expensive cheese from Serbian donkey milk, $1000+ per pound.', Milk_Type: 'Donkey', Origin_Country: 'Serbia', Rind_Type: 'None', Texture: 'crumbly', FlavorBySource: 'Donkey: Delicate, slightly sweet, ultra-rare' },
  { Cheese_ID: 614, Name: 'Italian Donkey Cheese', Description: 'Artisan Italian donkey cheese from Sardinia.', Milk_Type: 'Donkey', Origin_Country: 'Italy', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Donkey: Mild, sweet, low fat, digestible' },
  { Cheese_ID: 615, Name: 'Balkan Donkey Fresh', Description: 'Fresh Balkan donkey cheese, extremely limited production.', Milk_Type: 'Donkey', Origin_Country: 'Serbia', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Donkey: Light, clean, subtly sweet' },
  { Cheese_ID: 616, Name: 'Croatian Donkey Cheese', Description: 'Croatian donkey cheese from small family farms.', Milk_Type: 'Donkey', Origin_Country: 'Croatia', Rind_Type: 'None', Texture: 'crumbly', FlavorBySource: 'Donkey: Delicate, mineral notes, pristine' },
  { Cheese_ID: 617, Name: 'Aged Pule', Description: 'Aged version of Serbian pule, even rarer than fresh.', Milk_Type: 'Donkey', Origin_Country: 'Serbia', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Donkey: Complex sweetness, concentrated rarity' },

  // HORSE/MARE MILK CHEESES (618-622)
  { Cheese_ID: 618, Name: 'Kazakh Horse Cheese', Description: 'Traditional Kazakh cheese from mare milk, from nomadic culture.', Milk_Type: 'Horse', Origin_Country: 'Kazakhstan', Rind_Type: 'None', Texture: 'crumbly', FlavorBySource: 'Horse: Tangy, slightly sour, traditional steppe' },
  { Cheese_ID: 619, Name: 'Mongolian Airag Cheese', Description: 'Mongolian cheese from fermented mare\'s milk.', Milk_Type: 'Horse', Origin_Country: 'Mongolia', Rind_Type: 'None', Texture: 'crumbly', FlavorBySource: 'Horse: Tangy, fermented, nomadic heritage' },
  { Cheese_ID: 620, Name: 'Kurut', Description: 'Central Asian dried mare milk cheese, portable and preserved.', Milk_Type: 'Horse', Origin_Country: 'Kazakhstan', Rind_Type: 'None', Texture: 'hard', FlavorBySource: 'Horse: Intensely tangy, dried, salty' },
  { Cheese_ID: 621, Name: 'Kyrgyz Horse Cheese', Description: 'Kyrgyz artisan cheese from mountain mare herds.', Milk_Type: 'Horse', Origin_Country: 'Kyrgyzstan', Rind_Type: 'None', Texture: 'semi-soft', FlavorBySource: 'Horse: Tangy, grassy, high-altitude character' },
  { Cheese_ID: 622, Name: 'Russian Mare Cheese', Description: 'Russian steppe mare cheese from traditional methods.', Milk_Type: 'Horse', Origin_Country: 'Russia', Rind_Type: 'None', Texture: 'crumbly', FlavorBySource: 'Horse: Sour, fermented, rustic' },

  // ZEBU MILK CHEESES (623-627)
  { Cheese_ID: 623, Name: 'Indian Zebu Paneer', Description: 'Traditional Indian paneer from zebu (humped cattle) milk.', Milk_Type: 'Zebu', Origin_Country: 'India', Rind_Type: 'None', Texture: 'crumbly', FlavorBySource: 'Zebu: Mild, fresh, slightly sweet from tropical grazing' },
  { Cheese_ID: 624, Name: 'African Zebu Cheese', Description: 'East African fresh cheese from zebu cattle.', Milk_Type: 'Zebu', Origin_Country: 'Kenya', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Zebu: Clean, milky, adapted to tropical climate' },
  { Cheese_ID: 625, Name: 'Brazilian Zebu Fresh', Description: 'Brazilian fresh cheese from zebu dairy herds.', Milk_Type: 'Zebu', Origin_Country: 'Brazil', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Zebu: Mild, creamy, heat-tolerant cattle' },
  { Cheese_ID: 626, Name: 'Zebu Halloumi Style', Description: 'Grilling cheese from zebu milk, African adaptation.', Milk_Type: 'Zebu', Origin_Country: 'Tanzania', Rind_Type: 'None', Texture: 'semi-hard', FlavorBySource: 'Zebu: Squeaky, grillable, tropical terroir' },
  { Cheese_ID: 627, Name: 'Indian Zebu Khoa', Description: 'Concentrated zebu milk cheese for sweets and cooking.', Milk_Type: 'Zebu', Origin_Country: 'India', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Zebu: Rich, sweet, concentrated milk solids' },
  
  // A2 BRANDED CHEESES (628-645)
  { Cheese_ID: 628, Name: 'A2 Cheddar', Description: 'Cheddar made exclusively from A2 milk for easier digestion.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Classic cheddar from A2 beta-casein milk', Is_A2: true },
  { Cheese_ID: 629, Name: 'A2 Mild Cheddar', Description: 'Young, creamy A2 cheddar with gentle flavor.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'None', Texture: 'semi-hard', FlavorBySource: 'Cow: Smooth A2 milk creates mellow taste', Is_A2: true },
  { Cheese_ID: 630, Name: 'A2 Sharp Cheddar', Description: 'Aged A2 cheddar with tangy, bold flavor.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: A2 milk aged for sharp complexity', Is_A2: true },
  { Cheese_ID: 631, Name: 'A2 Mozzarella', Description: 'Fresh A2 mozzarella, creamy and mild.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: A2 milk creates delicate milky flavor', Is_A2: true },
  { Cheese_ID: 632, Name: 'A2 Monterey Jack', Description: 'Mild, buttery A2 Monterey Jack.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'None', Texture: 'semi-soft', FlavorBySource: 'Cow: A2 milk enhances creamy sweetness', Is_A2: true },
  { Cheese_ID: 633, Name: 'Jersey Cheddar', Description: 'Rich cheddar from Jersey cow milk with golden color.', Milk_Type: 'Cow', Origin_Country: 'United Kingdom', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Jersey milk creates extra creamy, buttery cheddar', Is_A2: true },
  { Cheese_ID: 634, Name: 'Jersey Blue', Description: 'Creamy blue cheese from Jersey cow milk.', Milk_Type: 'Cow', Origin_Country: 'United Kingdom', Rind_Type: 'Natural', Texture: 'semi-soft', FlavorBySource: 'Cow: Rich Jersey milk balances blue mold tang', Is_A2: true },
  { Cheese_ID: 635, Name: 'Jersey Brie', Description: 'Luxurious bloomy rind cheese from Jersey milk.', Milk_Type: 'Cow', Origin_Country: 'United Kingdom', Rind_Type: 'Bloomy', Texture: 'soft', FlavorBySource: 'Cow: Golden Jersey cream creates ultra-rich Brie', Is_A2: true },
  { Cheese_ID: 636, Name: 'Guernsey Gold Cheddar', Description: 'Golden cheddar from Guernsey cow milk.', Milk_Type: 'Cow', Origin_Country: 'United Kingdom', Rind_Type: 'Natural', Texture: 'hard', FlavorBySource: 'Cow: Guernsey milk rich in beta-carotene creates golden hue', Is_A2: true },
  { Cheese_ID: 637, Name: 'Guernsey Butter Cheese', Description: 'Exceptionally buttery cheese from Guernsey cows.', Milk_Type: 'Cow', Origin_Country: 'United Kingdom', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: High butterfat Guernsey milk creates silky texture', Is_A2: true },
  { Cheese_ID: 638, Name: 'A2 Colby', Description: 'Mild, sweet A2 Colby cheese.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'None', Texture: 'semi-soft', FlavorBySource: 'Cow: A2 milk creates gentle, sweet flavor', Is_A2: true },
  { Cheese_ID: 639, Name: 'A2 Pepper Jack', Description: 'Spicy A2 Monterey Jack with jalapeños.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'None', Texture: 'semi-soft', FlavorBySource: 'Cow: A2 milk balances pepper heat', Is_A2: true },
  { Cheese_ID: 640, Name: 'A2 Swiss', Description: 'Nutty A2 Swiss cheese with characteristic holes.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: A2 milk develops sweet, nutty notes', Is_A2: true },
  { Cheese_ID: 641, Name: 'A2 Provolone', Description: 'Smooth A2 provolone with mild tang.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'None', Texture: 'semi-hard', FlavorBySource: 'Cow: A2 milk creates mellow, stretchy texture', Is_A2: true },
  { Cheese_ID: 642, Name: 'Jersey Farmhouse', Description: 'Traditional farmhouse cheese from Jersey herds.', Milk_Type: 'Cow', Origin_Country: 'United Kingdom', Rind_Type: 'Natural', Texture: 'semi-hard', FlavorBySource: 'Cow: Heritage Jersey milk creates rich, complex flavor', Is_A2: true },
  { Cheese_ID: 643, Name: 'A2 Cream Cheese', Description: 'Spreadable A2 cream cheese, mild and creamy.', Milk_Type: 'Cow', Origin_Country: 'United States', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: A2 milk and cream create smooth spread', Is_A2: true },
  { Cheese_ID: 644, Name: 'A2 Gouda', Description: 'Mild A2 Gouda with buttery sweetness.', Milk_Type: 'Cow', Origin_Country: 'Netherlands', Rind_Type: 'Wax', Texture: 'semi-hard', FlavorBySource: 'Cow: A2 milk develops caramel notes', Is_A2: true },
  { Cheese_ID: 645, Name: 'Guernsey Soft Cheese', Description: 'Fresh, spreadable cheese from Guernsey milk.', Milk_Type: 'Cow', Origin_Country: 'United Kingdom', Rind_Type: 'None', Texture: 'soft', FlavorBySource: 'Cow: Rich Guernsey cream creates luxurious spread', Is_A2: true }
];

// TABLE 2: ATTRIBUTES (Tag/Group Library)
export const ATTRIBUTES: Attribute[] = [
  // FIRMNESS (101-105) with numeric values 0-100
  { Attribute_ID: 101, Attribute_Type: 'Firmness', Attribute_Value: 'Very Soft', NumericValue: 15 },
  { Attribute_ID: 102, Attribute_Type: 'Firmness', Attribute_Value: 'Soft', NumericValue: 25 },
  { Attribute_ID: 103, Attribute_Type: 'Firmness', Attribute_Value: 'Semi-Soft', NumericValue: 40 },
  { Attribute_ID: 104, Attribute_Type: 'Firmness', Attribute_Value: 'Semi-Hard', NumericValue: 65 },
  { Attribute_ID: 105, Attribute_Type: 'Firmness', Attribute_Value: 'Hard', NumericValue: 85 },
  
  // FLAVOR (201-215)
  { Attribute_ID: 201, Attribute_Type: 'Flavor', Attribute_Value: 'Buttery' },
  { Attribute_ID: 202, Attribute_Type: 'Flavor', Attribute_Value: 'Nutty' },
  { Attribute_ID: 203, Attribute_Type: 'Flavor', Attribute_Value: 'Tangy' },
  { Attribute_ID: 204, Attribute_Type: 'Flavor', Attribute_Value: 'Earthy' },
  { Attribute_ID: 205, Attribute_Type: 'Flavor', Attribute_Value: 'Pungent' },
  { Attribute_ID: 206, Attribute_Type: 'Flavor', Attribute_Value: 'Salty' },
  { Attribute_ID: 207, Attribute_Type: 'Flavor', Attribute_Value: 'Fresh' },
  { Attribute_ID: 208, Attribute_Type: 'Flavor', Attribute_Value: 'Milky' },
  { Attribute_ID: 209, Attribute_Type: 'Flavor', Attribute_Value: 'Umami' },
  { Attribute_ID: 210, Attribute_Type: 'Flavor', Attribute_Value: 'Sweet' },
  { Attribute_ID: 211, Attribute_Type: 'Flavor', Attribute_Value: 'Fruity' },
  { Attribute_ID: 212, Attribute_Type: 'Flavor', Attribute_Value: 'Mushroom' },
  { Attribute_ID: 213, Attribute_Type: 'Flavor', Attribute_Value: 'Caramel' },
  { Attribute_ID: 214, Attribute_Type: 'Flavor', Attribute_Value: 'Creamy' },
  { Attribute_ID: 215, Attribute_Type: 'Flavor', Attribute_Value: 'Sharp' },
  
 // MELTABILITY (301-304) with numeric values 0-100
{ Attribute_ID: 301, Attribute_Type: 'Meltability', Attribute_Value: 'Non-Melting', NumericValue: 15 },    // stubborn! / softens
{ Attribute_ID: 302, Attribute_Type: 'Meltability', Attribute_Value: 'Low-Melt', NumericValue: 40 },       // holds shape / melts firm
{ Attribute_ID: 303, Attribute_Type: 'Meltability', Attribute_Value: 'Moderate-Melt', NumericValue: 65 },  // stretchy / flows smooth
{ Attribute_ID: 304, Attribute_Type: 'Meltability', Attribute_Value: 'High-Melt', NumericValue: 85 },      // creamy / gooey
  
  // FUNKINESS (401-404) with numeric values 0-100
  { Attribute_ID: 401, Attribute_Type: 'Funkiness', Attribute_Value: 'Delicate', NumericValue: 15 },
  { Attribute_ID: 402, Attribute_Type: 'Funkiness', Attribute_Value: 'Mild', NumericValue: 30 },
  { Attribute_ID: 403, Attribute_Type: 'Funkiness', Attribute_Value: 'Aromatic', NumericValue: 55 },
  { Attribute_ID: 404, Attribute_Type: 'Funkiness', Attribute_Value: 'Intense', NumericValue: 85 },
  
  // AVAILABILITY (501-504)
  { Attribute_ID: 501, Attribute_Type: 'Availability', Attribute_Value: 'Ubiquitous' },
  { Attribute_ID: 502, Attribute_Type: 'Availability', Attribute_Value: 'Specialty' },
  { Attribute_ID: 503, Attribute_Type: 'Availability', Attribute_Value: 'Artisanal' },
  { Attribute_ID: 504, Attribute_Type: 'Availability', Attribute_Value: 'Obscure' },
  
  // USES (601-610)
  { Attribute_ID: 601, Attribute_Type: 'Use', Attribute_Value: 'Cooking' },
  { Attribute_ID: 602, Attribute_Type: 'Use', Attribute_Value: 'Snacking' },
  { Attribute_ID: 603, Attribute_Type: 'Use', Attribute_Value: 'Dessert' },
  { Attribute_ID: 604, Attribute_Type: 'Use', Attribute_Value: 'Salad' },
  { Attribute_ID: 605, Attribute_Type: 'Use', Attribute_Value: 'Appetizer' },
  { Attribute_ID: 606, Attribute_Type: 'Use', Attribute_Value: 'Fondue' },
  { Attribute_ID: 607, Attribute_Type: 'Use', Attribute_Value: 'Seasoning' },
  { Attribute_ID: 608, Attribute_Type: 'Use', Attribute_Value: 'Grilling' },
  { Attribute_ID: 609, Attribute_Type: 'Use', Attribute_Value: 'Baking' },
  { Attribute_ID: 610, Attribute_Type: 'Use', Attribute_Value: 'Spread' },
  
  // INCLUSIONS (701-705)
  { Attribute_ID: 701, Attribute_Type: 'Inclusion', Attribute_Value: 'Peppers' },
  { Attribute_ID: 702, Attribute_Type: 'Inclusion', Attribute_Value: 'Caraway' },
  { Attribute_ID: 703, Attribute_Type: 'Inclusion', Attribute_Value: 'Wine' },
  { Attribute_ID: 704, Attribute_Type: 'Inclusion', Attribute_Value: 'Herbs' },
  { Attribute_ID: 705, Attribute_Type: 'Inclusion', Attribute_Value: 'Truffles' }
];

// TABLE 3: CHEESE_ATTRIBUTE_MAPPING (The Linker)
export const CHEESE_ATTRIBUTE_MAPPINGS: CheeseAttributeMapping[] = [
  // Brie de Meaux (1)
  { Mapping_ID: 1, Cheese_ID: 1, Attribute_ID: 102 }, // Soft
  { Mapping_ID: 2, Cheese_ID: 1, Attribute_ID: 303 }, // Moderate-Melt
  { Mapping_ID: 3, Cheese_ID: 1, Attribute_ID: 201 }, // Buttery
  { Mapping_ID: 4, Cheese_ID: 1, Attribute_ID: 204 }, // Earthy
  { Mapping_ID: 5, Cheese_ID: 1, Attribute_ID: 212 }, // Mushroom
  { Mapping_ID: 6, Cheese_ID: 1, Attribute_ID: 402 }, // Mild funkiness
  { Mapping_ID: 7, Cheese_ID: 1, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 8, Cheese_ID: 1, Attribute_ID: 603 }, // Dessert
  { Mapping_ID: 9, Cheese_ID: 1, Attribute_ID: 605 }, // Appetizer
  
  // Roquefort (2)
  { Mapping_ID: 10, Cheese_ID: 2, Attribute_ID: 103 }, // Semi-Soft
  { Mapping_ID: 11, Cheese_ID: 2, Attribute_ID: 302 }, // Low-Melt
  { Mapping_ID: 12, Cheese_ID: 2, Attribute_ID: 206 }, // Salty
  { Mapping_ID: 13, Cheese_ID: 2, Attribute_ID: 203 }, // Tangy
  { Mapping_ID: 14, Cheese_ID: 2, Attribute_ID: 205 }, // Pungent
  { Mapping_ID: 15, Cheese_ID: 2, Attribute_ID: 404 }, // Intense funkiness
  { Mapping_ID: 16, Cheese_ID: 2, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 17, Cheese_ID: 2, Attribute_ID: 603 }, // Dessert
  { Mapping_ID: 18, Cheese_ID: 2, Attribute_ID: 604 }, // Salad
  
  // Continue with remaining cheeses...
  // Camembert (3)
  { Mapping_ID: 19, Cheese_ID: 3, Attribute_ID: 102 }, // Soft
  { Mapping_ID: 20, Cheese_ID: 3, Attribute_ID: 304 }, // High-Melt
  { Mapping_ID: 21, Cheese_ID: 3, Attribute_ID: 204 }, // Earthy
  { Mapping_ID: 22, Cheese_ID: 3, Attribute_ID: 212 }, // Mushroom
  { Mapping_ID: 23, Cheese_ID: 3, Attribute_ID: 201 }, // Buttery
  { Mapping_ID: 24, Cheese_ID: 3, Attribute_ID: 403 }, // Aromatic funkiness
  { Mapping_ID: 25, Cheese_ID: 3, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 26, Cheese_ID: 3, Attribute_ID: 603 }, // Dessert
  { Mapping_ID: 27, Cheese_ID: 3, Attribute_ID: 609 }, // Baking
  
  // Goat Chèvre (4)
  { Mapping_ID: 28, Cheese_ID: 4, Attribute_ID: 101 }, // Very Soft
  { Mapping_ID: 29, Cheese_ID: 4, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 30, Cheese_ID: 4, Attribute_ID: 203 }, // Tangy
  { Mapping_ID: 31, Cheese_ID: 4, Attribute_ID: 207 }, // Fresh
  { Mapping_ID: 32, Cheese_ID: 4, Attribute_ID: 402 }, // Mild funkiness
  { Mapping_ID: 33, Cheese_ID: 4, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 34, Cheese_ID: 4, Attribute_ID: 604 }, // Salad
  { Mapping_ID: 35, Cheese_ID: 4, Attribute_ID: 605 }, // Appetizer
  { Mapping_ID: 36, Cheese_ID: 4, Attribute_ID: 607 }, // Seasoning
  
  // Comté (5)
  { Mapping_ID: 37, Cheese_ID: 5, Attribute_ID: 105 }, // Hard
  { Mapping_ID: 38, Cheese_ID: 5, Attribute_ID: 303 }, // Moderate-Melt
  { Mapping_ID: 39, Cheese_ID: 5, Attribute_ID: 202 }, // Nutty
  { Mapping_ID: 40, Cheese_ID: 5, Attribute_ID: 211 }, // Fruity
  { Mapping_ID: 41, Cheese_ID: 5, Attribute_ID: 213 }, // Caramel
  { Mapping_ID: 42, Cheese_ID: 5, Attribute_ID: 402 }, // Mild funkiness
  { Mapping_ID: 43, Cheese_ID: 5, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 44, Cheese_ID: 5, Attribute_ID: 602 }, // Snacking
  { Mapping_ID: 45, Cheese_ID: 5, Attribute_ID: 601 }, // Cooking
  
  // Époisses (6)
  { Mapping_ID: 46, Cheese_ID: 6, Attribute_ID: 101 }, // Very Soft
  { Mapping_ID: 47, Cheese_ID: 6, Attribute_ID: 303 }, // Moderate-Melt
  { Mapping_ID: 48, Cheese_ID: 6, Attribute_ID: 205 }, // Pungent
  { Mapping_ID: 49, Cheese_ID: 6, Attribute_ID: 206 }, // Salty
  { Mapping_ID: 50, Cheese_ID: 6, Attribute_ID: 404 }, // Intense funkiness
  { Mapping_ID: 51, Cheese_ID: 6, Attribute_ID: 503 }, // Artisanal
  { Mapping_ID: 52, Cheese_ID: 6, Attribute_ID: 603 }, // Dessert
  
  // Mozzarella di Bufala (7)
  { Mapping_ID: 53, Cheese_ID: 7, Attribute_ID: 101 }, // Very Soft
  { Mapping_ID: 54, Cheese_ID: 7, Attribute_ID: 304 }, // High-Melt
  { Mapping_ID: 55, Cheese_ID: 7, Attribute_ID: 208 }, // Milky
  { Mapping_ID: 56, Cheese_ID: 7, Attribute_ID: 207 }, // Fresh
  { Mapping_ID: 57, Cheese_ID: 7, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 58, Cheese_ID: 7, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 59, Cheese_ID: 7, Attribute_ID: 601 }, // Cooking
  { Mapping_ID: 60, Cheese_ID: 7, Attribute_ID: 604 }, // Salad
  
  // Parmigiano Reggiano (8)
  { Mapping_ID: 61, Cheese_ID: 8, Attribute_ID: 105 }, // Hard
  { Mapping_ID: 62, Cheese_ID: 8, Attribute_ID: 301 }, // Non-Melting (changed from Low-Melt)
  { Mapping_ID: 63, Cheese_ID: 8, Attribute_ID: 209 }, // Umami
  { Mapping_ID: 64, Cheese_ID: 8, Attribute_ID: 202 }, // Nutty
  { Mapping_ID: 65, Cheese_ID: 8, Attribute_ID: 211 }, // Fruity
  { Mapping_ID: 66, Cheese_ID: 8, Attribute_ID: 403 }, // Aromatic funkiness (changed from Mild for aged complexity)
  { Mapping_ID: 67, Cheese_ID: 8, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 68, Cheese_ID: 8, Attribute_ID: 607 }, // Seasoning
  { Mapping_ID: 69, Cheese_ID: 8, Attribute_ID: 601 }, // Cooking
  
  // Gorgonzola Dolce (9)
  { Mapping_ID: 70, Cheese_ID: 9, Attribute_ID: 102 }, // Soft
  { Mapping_ID: 71, Cheese_ID: 9, Attribute_ID: 304 }, // High-Melt
  { Mapping_ID: 72, Cheese_ID: 9, Attribute_ID: 210 }, // Sweet
  { Mapping_ID: 73, Cheese_ID: 9, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 74, Cheese_ID: 9, Attribute_ID: 403 }, // Aromatic funkiness
  { Mapping_ID: 75, Cheese_ID: 9, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 76, Cheese_ID: 9, Attribute_ID: 603 }, // Dessert
  { Mapping_ID: 77, Cheese_ID: 9, Attribute_ID: 601 }, // Cooking
  
  // Pecorino Romano (10)
  { Mapping_ID: 78, Cheese_ID: 10, Attribute_ID: 105 }, // Hard
  { Mapping_ID: 79, Cheese_ID: 10, Attribute_ID: 301 }, // Non-Melting (changed from Low-Melt for accuracy)
  { Mapping_ID: 80, Cheese_ID: 10, Attribute_ID: 206 }, // Salty
  { Mapping_ID: 81, Cheese_ID: 10, Attribute_ID: 215 }, // Sharp
  { Mapping_ID: 82, Cheese_ID: 10, Attribute_ID: 403 }, // Aromatic funkiness (changed from Mild for aged complexity)
  { Mapping_ID: 83, Cheese_ID: 10, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 84, Cheese_ID: 10, Attribute_ID: 607 }, // Seasoning
  { Mapping_ID: 85, Cheese_ID: 10, Attribute_ID: 601 }, // Cooking
  
  // Taleggio (11) - Adding mappings for cheese 11
  { Mapping_ID: 86, Cheese_ID: 11, Attribute_ID: 103 }, // Semi-Soft
  { Mapping_ID: 87, Cheese_ID: 11, Attribute_ID: 304 }, // High-Melt
  { Mapping_ID: 88, Cheese_ID: 11, Attribute_ID: 211 }, // Fruity
  { Mapping_ID: 89, Cheese_ID: 11, Attribute_ID: 203 }, // Tangy
  { Mapping_ID: 90, Cheese_ID: 11, Attribute_ID: 403 }, // Aromatic funkiness
  { Mapping_ID: 91, Cheese_ID: 11, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 92, Cheese_ID: 11, Attribute_ID: 602 }, // Snacking
  { Mapping_ID: 93, Cheese_ID: 11, Attribute_ID: 601 }, // Cooking

  // Manchego (12)
  { Mapping_ID: 94, Cheese_ID: 12, Attribute_ID: 104 }, // Semi-Hard (firm)
  { Mapping_ID: 95, Cheese_ID: 12, Attribute_ID: 303 }, // Moderate-Melt
  { Mapping_ID: 96, Cheese_ID: 12, Attribute_ID: 202 }, // Nutty
  { Mapping_ID: 97, Cheese_ID: 12, Attribute_ID: 210 }, // Sweet
  { Mapping_ID: 98, Cheese_ID: 12, Attribute_ID: 402 }, // Mild funkiness
  { Mapping_ID: 99, Cheese_ID: 12, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 100, Cheese_ID: 12, Attribute_ID: 602 }, // Snacking
  { Mapping_ID: 101, Cheese_ID: 12, Attribute_ID: 605 }, // Appetizer

  // Drunken Goat (13)
  { Mapping_ID: 102, Cheese_ID: 13, Attribute_ID: 104 }, // Semi-Hard (semi-firm)
  { Mapping_ID: 103, Cheese_ID: 13, Attribute_ID: 303 }, // Moderate-Melt
  { Mapping_ID: 104, Cheese_ID: 13, Attribute_ID: 203 }, // Tangy
  { Mapping_ID: 105, Cheese_ID: 13, Attribute_ID: 211 }, // Fruity
  { Mapping_ID: 106, Cheese_ID: 13, Attribute_ID: 703 }, // Wine inclusion
  { Mapping_ID: 107, Cheese_ID: 13, Attribute_ID: 402 }, // Mild funkiness
  { Mapping_ID: 108, Cheese_ID: 13, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 109, Cheese_ID: 13, Attribute_ID: 602 }, // Snacking
  { Mapping_ID: 110, Cheese_ID: 13, Attribute_ID: 605 }, // Appetizer

  // Cabrales (14)
  { Mapping_ID: 111, Cheese_ID: 14, Attribute_ID: 103 }, // Semi-Soft
  { Mapping_ID: 112, Cheese_ID: 14, Attribute_ID: 302 }, // Low-Melt
  { Mapping_ID: 113, Cheese_ID: 14, Attribute_ID: 215 }, // Sharp
  { Mapping_ID: 114, Cheese_ID: 14, Attribute_ID: 206 }, // Salty
  { Mapping_ID: 115, Cheese_ID: 14, Attribute_ID: 404 }, // Intense funkiness
  { Mapping_ID: 116, Cheese_ID: 14, Attribute_ID: 503 }, // Artisanal
  { Mapping_ID: 117, Cheese_ID: 14, Attribute_ID: 603 }, // Dessert
  { Mapping_ID: 118, Cheese_ID: 14, Attribute_ID: 604 }, // Salad

  // Gruyère (15)
  { Mapping_ID: 119, Cheese_ID: 15, Attribute_ID: 105 }, // Hard
  { Mapping_ID: 120, Cheese_ID: 15, Attribute_ID: 304 }, // High-Melt
  { Mapping_ID: 121, Cheese_ID: 15, Attribute_ID: 202 }, // Nutty
  { Mapping_ID: 122, Cheese_ID: 15, Attribute_ID: 211 }, // Fruity
  { Mapping_ID: 123, Cheese_ID: 15, Attribute_ID: 402 }, // Mild funkiness
  { Mapping_ID: 124, Cheese_ID: 15, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 125, Cheese_ID: 15, Attribute_ID: 601 }, // Cooking
  { Mapping_ID: 126, Cheese_ID: 15, Attribute_ID: 606 }, // Fondue

  // Emmental (16)
  { Mapping_ID: 127, Cheese_ID: 16, Attribute_ID: 105 }, // Hard
  { Mapping_ID: 128, Cheese_ID: 16, Attribute_ID: 303 }, // Moderate-Melt
  { Mapping_ID: 129, Cheese_ID: 16, Attribute_ID: 202 }, // Nutty
  { Mapping_ID: 130, Cheese_ID: 16, Attribute_ID: 210 }, // Sweet
  { Mapping_ID: 131, Cheese_ID: 16, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 132, Cheese_ID: 16, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 133, Cheese_ID: 16, Attribute_ID: 602 }, // Snacking
  { Mapping_ID: 134, Cheese_ID: 16, Attribute_ID: 601 }, // Cooking

  // Appenzeller (17)
  { Mapping_ID: 135, Cheese_ID: 17, Attribute_ID: 105 }, // Hard
  { Mapping_ID: 136, Cheese_ID: 17, Attribute_ID: 303 }, // Moderate-Melt
  { Mapping_ID: 137, Cheese_ID: 17, Attribute_ID: 202 }, // Nutty
  { Mapping_ID: 138, Cheese_ID: 17, Attribute_ID: 211 }, // Fruity
  { Mapping_ID: 139, Cheese_ID: 17, Attribute_ID: 403 }, // Aromatic funkiness
  { Mapping_ID: 140, Cheese_ID: 17, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 141, Cheese_ID: 17, Attribute_ID: 602 }, // Snacking
  { Mapping_ID: 142, Cheese_ID: 17, Attribute_ID: 601 }, // Cooking

  // Aged Cheddar (18)
  { Mapping_ID: 143, Cheese_ID: 18, Attribute_ID: 105 }, // Hard
  { Mapping_ID: 144, Cheese_ID: 18, Attribute_ID: 302 }, // Low-Melt
  { Mapping_ID: 145, Cheese_ID: 18, Attribute_ID: 215 }, // Sharp
  { Mapping_ID: 146, Cheese_ID: 18, Attribute_ID: 203 }, // Tangy
  { Mapping_ID: 147, Cheese_ID: 18, Attribute_ID: 403 }, // Aromatic funkiness
  { Mapping_ID: 148, Cheese_ID: 18, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 149, Cheese_ID: 18, Attribute_ID: 602 }, // Snacking
  { Mapping_ID: 150, Cheese_ID: 18, Attribute_ID: 605 }, // Appetizer

  // Stilton (19)
  { Mapping_ID: 151, Cheese_ID: 19, Attribute_ID: 103 }, // Semi-Soft
  { Mapping_ID: 152, Cheese_ID: 19, Attribute_ID: 302 }, // Low-Melt
  { Mapping_ID: 153, Cheese_ID: 19, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 154, Cheese_ID: 19, Attribute_ID: 215 }, // Sharp
  { Mapping_ID: 155, Cheese_ID: 19, Attribute_ID: 404 }, // Intense funkiness
  { Mapping_ID: 156, Cheese_ID: 19, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 157, Cheese_ID: 19, Attribute_ID: 603 }, // Dessert
  { Mapping_ID: 158, Cheese_ID: 19, Attribute_ID: 604 }, // Salad

  // Wensleydale (20)
  { Mapping_ID: 159, Cheese_ID: 20, Attribute_ID: 104 }, // Semi-Hard (firm)
  { Mapping_ID: 160, Cheese_ID: 20, Attribute_ID: 302 }, // Low-Melt
  { Mapping_ID: 161, Cheese_ID: 20, Attribute_ID: 210 }, // Sweet
  { Mapping_ID: 162, Cheese_ID: 20, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 163, Cheese_ID: 20, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 164, Cheese_ID: 20, Attribute_ID: 602 }, // Snacking
  { Mapping_ID: 165, Cheese_ID: 20, Attribute_ID: 603 }, // Dessert

  // Aged Gouda (21)
  { Mapping_ID: 166, Cheese_ID: 21, Attribute_ID: 105 }, // Hard
  { Mapping_ID: 167, Cheese_ID: 21, Attribute_ID: 302 }, // Low-Melt
  { Mapping_ID: 168, Cheese_ID: 21, Attribute_ID: 213 }, // Caramel
  { Mapping_ID: 169, Cheese_ID: 21, Attribute_ID: 210 }, // Sweet
  { Mapping_ID: 170, Cheese_ID: 21, Attribute_ID: 202 }, // Nutty
  { Mapping_ID: 171, Cheese_ID: 21, Attribute_ID: 402 }, // Mild funkiness
  { Mapping_ID: 172, Cheese_ID: 21, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 173, Cheese_ID: 21, Attribute_ID: 602 }, // Snacking
  { Mapping_ID: 174, Cheese_ID: 21, Attribute_ID: 605 }, // Appetizer

  // Edam (22)
  { Mapping_ID: 175, Cheese_ID: 22, Attribute_ID: 104 }, // Semi-Hard
  { Mapping_ID: 176, Cheese_ID: 22, Attribute_ID: 303 }, // Moderate-Melt
  { Mapping_ID: 177, Cheese_ID: 22, Attribute_ID: 202 }, // Nutty
  { Mapping_ID: 178, Cheese_ID: 22, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 179, Cheese_ID: 22, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 180, Cheese_ID: 22, Attribute_ID: 602 }, // Snacking
  { Mapping_ID: 181, Cheese_ID: 22, Attribute_ID: 601 }, // Cooking

  // Feta (23)
  { Mapping_ID: 182, Cheese_ID: 23, Attribute_ID: 103 }, // Semi-Soft (crumbly)
  { Mapping_ID: 183, Cheese_ID: 23, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 184, Cheese_ID: 23, Attribute_ID: 203 }, // Tangy
  { Mapping_ID: 185, Cheese_ID: 23, Attribute_ID: 206 }, // Salty
  { Mapping_ID: 186, Cheese_ID: 23, Attribute_ID: 402 }, // Mild funkiness
  { Mapping_ID: 187, Cheese_ID: 23, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 188, Cheese_ID: 23, Attribute_ID: 604 }, // Salad
  { Mapping_ID: 189, Cheese_ID: 23, Attribute_ID: 601 }, // Cooking

  // Kasseri (24)
  { Mapping_ID: 190, Cheese_ID: 24, Attribute_ID: 104 }, // Semi-Hard
  { Mapping_ID: 191, Cheese_ID: 24, Attribute_ID: 304 }, // High-Melt
  { Mapping_ID: 192, Cheese_ID: 24, Attribute_ID: 206 }, // Salty
  { Mapping_ID: 193, Cheese_ID: 24, Attribute_ID: 402 }, // Mild funkiness
  { Mapping_ID: 194, Cheese_ID: 24, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 195, Cheese_ID: 24, Attribute_ID: 608 }, // Grilling
  { Mapping_ID: 196, Cheese_ID: 24, Attribute_ID: 601 }, // Cooking

  // Halloumi (25)
  { Mapping_ID: 197, Cheese_ID: 25, Attribute_ID: 104 }, // Semi-Hard
  { Mapping_ID: 198, Cheese_ID: 25, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 199, Cheese_ID: 25, Attribute_ID: 206 }, // Salty
  { Mapping_ID: 200, Cheese_ID: 25, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 201, Cheese_ID: 25, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 202, Cheese_ID: 25, Attribute_ID: 608 }, // Grilling
  { Mapping_ID: 203, Cheese_ID: 25, Attribute_ID: 601 }, // Cooking
  { Mapping_ID: 204, Cheese_ID: 25, Attribute_ID: 605 }, // Appetizer

  // Due to the extreme length of 1091 total mappings, this is just a partial restoration.
  // Please paste the complete mappings section from your original database to fully restore.
  // The structure is correct and ready to accept all remaining mappings (IDs 205-1091).
  
  // Labneh (26)
  { Mapping_ID: 205, Cheese_ID: 26, Attribute_ID: 101 }, // Very Soft
  { Mapping_ID: 206, Cheese_ID: 26, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 207, Cheese_ID: 26, Attribute_ID: 203 }, // Tangy
  { Mapping_ID: 208, Cheese_ID: 26, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 209, Cheese_ID: 26, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 210, Cheese_ID: 26, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 211, Cheese_ID: 26, Attribute_ID: 610 }, // Spread
  { Mapping_ID: 212, Cheese_ID: 26, Attribute_ID: 605 }, // Appetizer

  // Akkawi (27)
  { Mapping_ID: 213, Cheese_ID: 27, Attribute_ID: 103 }, // Semi-Soft
  { Mapping_ID: 214, Cheese_ID: 27, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 215, Cheese_ID: 27, Attribute_ID: 206 }, // Salty
  { Mapping_ID: 216, Cheese_ID: 27, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 217, Cheese_ID: 27, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 218, Cheese_ID: 27, Attribute_ID: 603 }, // Dessert
  { Mapping_ID: 219, Cheese_ID: 27, Attribute_ID: 609 }, // Baking

  // Nabulsi (28)
  { Mapping_ID: 220, Cheese_ID: 28, Attribute_ID: 103 }, // Semi-Soft
  { Mapping_ID: 221, Cheese_ID: 28, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 222, Cheese_ID: 28, Attribute_ID: 206 }, // Salty
  { Mapping_ID: 223, Cheese_ID: 28, Attribute_ID: 210 }, // Sweet
  { Mapping_ID: 224, Cheese_ID: 28, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 225, Cheese_ID: 28, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 226, Cheese_ID: 28, Attribute_ID: 602 }, // Snacking
  { Mapping_ID: 227, Cheese_ID: 28, Attribute_ID: 603 }, // Dessert

// Pepper Jack (29)
  { Mapping_ID: 200, Cheese_ID: 29, Attribute_ID: 103 }, // Semi-Soft
  { Mapping_ID: 201, Cheese_ID: 29, Attribute_ID: 304 }, // High-Melt
  { Mapping_ID: 202, Cheese_ID: 29, Attribute_ID: 701 }, // Peppers inclusion
  { Mapping_ID: 203, Cheese_ID: 29, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 204, Cheese_ID: 29, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 205, Cheese_ID: 29, Attribute_ID: 601 }, // Cooking
  { Mapping_ID: 206, Cheese_ID: 29, Attribute_ID: 602 }, // Snacking
  
  // Havarti with Caraway (57)
  { Mapping_ID: 400, Cheese_ID: 57, Attribute_ID: 103 }, // Semi-Soft
  { Mapping_ID: 401, Cheese_ID: 57, Attribute_ID: 304 }, // High-Melt
  { Mapping_ID: 402, Cheese_ID: 57, Attribute_ID: 201 }, // Buttery
  { Mapping_ID: 403, Cheese_ID: 57, Attribute_ID: 203 }, // Tangy
  { Mapping_ID: 404, Cheese_ID: 57, Attribute_ID: 702 }, // Caraway inclusion
  { Mapping_ID: 405, Cheese_ID: 57, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 406, Cheese_ID: 57, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 407, Cheese_ID: 57, Attribute_ID: 602 }, // Snacking
  
  // Ossau-Iraty (58)
  { Mapping_ID: 408, Cheese_ID: 58, Attribute_ID: 104 }, // Semi-Hard
  { Mapping_ID: 409, Cheese_ID: 58, Attribute_ID: 303 }, // Moderate-Melt
  { Mapping_ID: 410, Cheese_ID: 58, Attribute_ID: 202 }, // Nutty
  { Mapping_ID: 411, Cheese_ID: 58, Attribute_ID: 210 }, // Sweet
  { Mapping_ID: 412, Cheese_ID: 58, Attribute_ID: 211 }, // Fruity
  { Mapping_ID: 413, Cheese_ID: 58, Attribute_ID: 402 }, // Mild funkiness
  { Mapping_ID: 414, Cheese_ID: 58, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 415, Cheese_ID: 58, Attribute_ID: 601 }, // Cooking
  { Mapping_ID: 416, Cheese_ID: 58, Attribute_ID: 602 }, // Snacking
  { Mapping_ID: 417, Cheese_ID: 58, Attribute_ID: 605 }, // Appetizer
  
  // Idiazábal (59)
  { Mapping_ID: 418, Cheese_ID: 59, Attribute_ID: 105 }, // Hard
  { Mapping_ID: 419, Cheese_ID: 59, Attribute_ID: 303 }, // Moderate-Melt
  { Mapping_ID: 420, Cheese_ID: 59, Attribute_ID: 202 }, // Nutty
  { Mapping_ID: 421, Cheese_ID: 59, Attribute_ID: 210 }, // Sweet
  { Mapping_ID: 422, Cheese_ID: 59, Attribute_ID: 402 }, // Mild funkiness
  { Mapping_ID: 423, Cheese_ID: 59, Attribute_ID: 503 }, // Artisanal
  { Mapping_ID: 424, Cheese_ID: 59, Attribute_ID: 601 }, // Cooking
  { Mapping_ID: 425, Cheese_ID: 59, Attribute_ID: 607 }, // Seasoning
  { Mapping_ID: 426, Cheese_ID: 59, Attribute_ID: 602 }, // Snacking
  
  // Parmesan (60) - Generic grocery store version
  { Mapping_ID: 427, Cheese_ID: 60, Attribute_ID: 105 }, // Hard
  { Mapping_ID: 428, Cheese_ID: 60, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 429, Cheese_ID: 60, Attribute_ID: 206 }, // Salty
  { Mapping_ID: 430, Cheese_ID: 60, Attribute_ID: 202 }, // Nutty
  { Mapping_ID: 431, Cheese_ID: 60, Attribute_ID: 402 }, // Mild funkiness (less complex than Parmigiano Reggiano)
  { Mapping_ID: 432, Cheese_ID: 60, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 433, Cheese_ID: 60, Attribute_ID: 607 }, // Seasoning
  { Mapping_ID: 434, Cheese_ID: 60, Attribute_ID: 601 }, // Cooking

  // EXPANDED CHEESE MAPPINGS (IDs 61-120)
  
  // Mild Cheddar (61)
  { Mapping_ID: 435, Cheese_ID: 61, Attribute_ID: 104 }, // Semi-Hard
  { Mapping_ID: 436, Cheese_ID: 61, Attribute_ID: 304 }, // High-Melt
  { Mapping_ID: 437, Cheese_ID: 61, Attribute_ID: 201 }, // Buttery
  { Mapping_ID: 438, Cheese_ID: 61, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 439, Cheese_ID: 61, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 440, Cheese_ID: 61, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 441, Cheese_ID: 61, Attribute_ID: 601 }, // Cooking
  { Mapping_ID: 442, Cheese_ID: 61, Attribute_ID: 602 }, // Snacking

  // Sharp Cheddar (62)
  { Mapping_ID: 443, Cheese_ID: 62, Attribute_ID: 105 }, // Hard
  { Mapping_ID: 444, Cheese_ID: 62, Attribute_ID: 303 }, // Moderate-Melt
  { Mapping_ID: 445, Cheese_ID: 62, Attribute_ID: 215 }, // Sharp
  { Mapping_ID: 446, Cheese_ID: 62, Attribute_ID: 203 }, // Tangy
  { Mapping_ID: 447, Cheese_ID: 62, Attribute_ID: 402 }, // Mild funkiness
  { Mapping_ID: 448, Cheese_ID: 62, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 449, Cheese_ID: 62, Attribute_ID: 601 }, // Cooking
  { Mapping_ID: 450, Cheese_ID: 62, Attribute_ID: 602 }, // Snacking

  // Extra Sharp Cheddar (63)
  { Mapping_ID: 451, Cheese_ID: 63, Attribute_ID: 105 }, // Hard
  { Mapping_ID: 452, Cheese_ID: 63, Attribute_ID: 302 }, // Low-Melt
  { Mapping_ID: 453, Cheese_ID: 63, Attribute_ID: 215 }, // Sharp
  { Mapping_ID: 454, Cheese_ID: 63, Attribute_ID: 203 }, // Tangy
  { Mapping_ID: 455, Cheese_ID: 63, Attribute_ID: 403 }, // Aromatic funkiness
  { Mapping_ID: 456, Cheese_ID: 63, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 457, Cheese_ID: 63, Attribute_ID: 602 }, // Snacking
  { Mapping_ID: 458, Cheese_ID: 63, Attribute_ID: 605 }, // Appetizer

  // Smoked Cheddar (64)
  { Mapping_ID: 459, Cheese_ID: 64, Attribute_ID: 104 }, // Semi-Hard
  { Mapping_ID: 460, Cheese_ID: 64, Attribute_ID: 304 }, // High-Melt
  { Mapping_ID: 461, Cheese_ID: 64, Attribute_ID: 202 }, // Nutty
  { Mapping_ID: 462, Cheese_ID: 64, Attribute_ID: 402 }, // Mild funkiness
  { Mapping_ID: 463, Cheese_ID: 64, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 464, Cheese_ID: 64, Attribute_ID: 601 }, // Cooking
  { Mapping_ID: 465, Cheese_ID: 64, Attribute_ID: 602 }, // Snacking

  // Low-Moisture Mozzarella (65)
  { Mapping_ID: 466, Cheese_ID: 65, Attribute_ID: 103 }, // Semi-Soft
  { Mapping_ID: 467, Cheese_ID: 65, Attribute_ID: 304 }, // High-Melt
  { Mapping_ID: 468, Cheese_ID: 65, Attribute_ID: 208 }, // Milky
  { Mapping_ID: 469, Cheese_ID: 65, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 470, Cheese_ID: 65, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 471, Cheese_ID: 65, Attribute_ID: 601 }, // Cooking
  { Mapping_ID: 472, Cheese_ID: 65, Attribute_ID: 609 }, // Baking

  // Swiss Cheese (66)
  { Mapping_ID: 473, Cheese_ID: 66, Attribute_ID: 104 }, // Semi-Hard
  { Mapping_ID: 474, Cheese_ID: 66, Attribute_ID: 303 }, // Moderate-Melt
  { Mapping_ID: 475, Cheese_ID: 66, Attribute_ID: 202 }, // Nutty
  { Mapping_ID: 476, Cheese_ID: 66, Attribute_ID: 210 }, // Sweet
  { Mapping_ID: 477, Cheese_ID: 66, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 478, Cheese_ID: 66, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 479, Cheese_ID: 66, Attribute_ID: 601 }, // Cooking
  { Mapping_ID: 480, Cheese_ID: 66, Attribute_ID: 602 }, // Snacking

  // Monterey Jack (67)
  { Mapping_ID: 481, Cheese_ID: 67, Attribute_ID: 103 }, // Semi-Soft
  { Mapping_ID: 482, Cheese_ID: 67, Attribute_ID: 304 }, // High-Melt
  { Mapping_ID: 483, Cheese_ID: 67, Attribute_ID: 201 }, // Buttery
  { Mapping_ID: 484, Cheese_ID: 67, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 485, Cheese_ID: 67, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 486, Cheese_ID: 67, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 487, Cheese_ID: 67, Attribute_ID: 601 }, // Cooking
  { Mapping_ID: 488, Cheese_ID: 67, Attribute_ID: 602 }, // Snacking

  // Colby (68)
  { Mapping_ID: 489, Cheese_ID: 68, Attribute_ID: 103 }, // Semi-Soft
  { Mapping_ID: 490, Cheese_ID: 68, Attribute_ID: 304 }, // High-Melt
  { Mapping_ID: 491, Cheese_ID: 68, Attribute_ID: 210 }, // Sweet
  { Mapping_ID: 492, Cheese_ID: 68, Attribute_ID: 201 }, // Buttery
  { Mapping_ID: 493, Cheese_ID: 68, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 494, Cheese_ID: 68, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 495, Cheese_ID: 68, Attribute_ID: 601 }, // Cooking
  { Mapping_ID: 496, Cheese_ID: 68, Attribute_ID: 602 }, // Snacking

  // Muenster (69)
  { Mapping_ID: 497, Cheese_ID: 69, Attribute_ID: 103 }, // Semi-Soft
  { Mapping_ID: 498, Cheese_ID: 69, Attribute_ID: 304 }, // High-Melt
  { Mapping_ID: 499, Cheese_ID: 69, Attribute_ID: 203 }, // Tangy
  { Mapping_ID: 500, Cheese_ID: 69, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 501, Cheese_ID: 69, Attribute_ID: 402 }, // Mild funkiness
  { Mapping_ID: 502, Cheese_ID: 69, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 503, Cheese_ID: 69, Attribute_ID: 601 }, // Cooking
  { Mapping_ID: 504, Cheese_ID: 69, Attribute_ID: 602 }, // Snacking

  // Cream Cheese (70)
  { Mapping_ID: 505, Cheese_ID: 70, Attribute_ID: 101 }, // Very Soft
  { Mapping_ID: 506, Cheese_ID: 70, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 507, Cheese_ID: 70, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 508, Cheese_ID: 70, Attribute_ID: 203 }, // Tangy
  { Mapping_ID: 509, Cheese_ID: 70, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 510, Cheese_ID: 70, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 511, Cheese_ID: 70, Attribute_ID: 610 }, // Spread
  { Mapping_ID: 512, Cheese_ID: 70, Attribute_ID: 609 }, // Baking

  // String Cheese (71)
  { Mapping_ID: 513, Cheese_ID: 71, Attribute_ID: 103 }, // Semi-Soft
  { Mapping_ID: 514, Cheese_ID: 71, Attribute_ID: 304 }, // High-Melt
  { Mapping_ID: 515, Cheese_ID: 71, Attribute_ID: 208 }, // Milky
  { Mapping_ID: 516, Cheese_ID: 71, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 517, Cheese_ID: 71, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 518, Cheese_ID: 71, Attribute_ID: 602 }, // Snacking

  // American Cheese (72)
  { Mapping_ID: 519, Cheese_ID: 72, Attribute_ID: 102 }, // Soft
  { Mapping_ID: 520, Cheese_ID: 72, Attribute_ID: 304 }, // High-Melt
  { Mapping_ID: 521, Cheese_ID: 72, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 522, Cheese_ID: 72, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 523, Cheese_ID: 72, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 524, Cheese_ID: 72, Attribute_ID: 601 }, // Cooking

  // Young Gouda (73)
  { Mapping_ID: 525, Cheese_ID: 73, Attribute_ID: 104 }, // Semi-Hard
  { Mapping_ID: 526, Cheese_ID: 73, Attribute_ID: 304 }, // High-Melt
  { Mapping_ID: 527, Cheese_ID: 73, Attribute_ID: 201 }, // Buttery
  { Mapping_ID: 528, Cheese_ID: 73, Attribute_ID: 210 }, // Sweet
  { Mapping_ID: 529, Cheese_ID: 73, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 530, Cheese_ID: 73, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 531, Cheese_ID: 73, Attribute_ID: 601 }, // Cooking
  { Mapping_ID: 532, Cheese_ID: 73, Attribute_ID: 602 }, // Snacking

  // Smoked Gouda (74)
  { Mapping_ID: 533, Cheese_ID: 74, Attribute_ID: 104 }, // Semi-Hard
  { Mapping_ID: 534, Cheese_ID: 74, Attribute_ID: 303 }, // Moderate-Melt
  { Mapping_ID: 535, Cheese_ID: 74, Attribute_ID: 201 }, // Buttery
  { Mapping_ID: 536, Cheese_ID: 74, Attribute_ID: 202 }, // Nutty
  { Mapping_ID: 537, Cheese_ID: 74, Attribute_ID: 402 }, // Mild funkiness
  { Mapping_ID: 538, Cheese_ID: 74, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 539, Cheese_ID: 74, Attribute_ID: 601 }, // Cooking
  { Mapping_ID: 540, Cheese_ID: 74, Attribute_ID: 602 }, // Snacking

  // Gorgonzola Piccante (75)
  { Mapping_ID: 541, Cheese_ID: 75, Attribute_ID: 103 }, // Semi-Soft (crumbly)
  { Mapping_ID: 542, Cheese_ID: 75, Attribute_ID: 302 }, // Low-Melt
  { Mapping_ID: 543, Cheese_ID: 75, Attribute_ID: 215 }, // Sharp
  { Mapping_ID: 544, Cheese_ID: 75, Attribute_ID: 206 }, // Salty
  { Mapping_ID: 545, Cheese_ID: 75, Attribute_ID: 404 }, // Intense funkiness
  { Mapping_ID: 546, Cheese_ID: 75, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 547, Cheese_ID: 75, Attribute_ID: 603 }, // Dessert
  { Mapping_ID: 548, Cheese_ID: 75, Attribute_ID: 604 }, // Salad

  // Danish Blue (76)
  { Mapping_ID: 549, Cheese_ID: 76, Attribute_ID: 103 }, // Semi-Soft (crumbly)
  { Mapping_ID: 550, Cheese_ID: 76, Attribute_ID: 302 }, // Low-Melt
  { Mapping_ID: 551, Cheese_ID: 76, Attribute_ID: 206 }, // Salty
  { Mapping_ID: 552, Cheese_ID: 76, Attribute_ID: 215 }, // Sharp
  { Mapping_ID: 553, Cheese_ID: 76, Attribute_ID: 404 }, // Intense funkiness
  { Mapping_ID: 554, Cheese_ID: 76, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 555, Cheese_ID: 76, Attribute_ID: 603 }, // Dessert
  { Mapping_ID: 556, Cheese_ID: 76, Attribute_ID: 610 }, // Spread

  // Point Reyes Blue (77)
  { Mapping_ID: 557, Cheese_ID: 77, Attribute_ID: 103 }, // Semi-Soft
  { Mapping_ID: 558, Cheese_ID: 77, Attribute_ID: 302 }, // Low-Melt
  { Mapping_ID: 559, Cheese_ID: 77, Attribute_ID: 210 }, // Sweet
  { Mapping_ID: 560, Cheese_ID: 77, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 561, Cheese_ID: 77, Attribute_ID: 403 }, // Aromatic funkiness
  { Mapping_ID: 562, Cheese_ID: 77, Attribute_ID: 503 }, // Artisanal
  { Mapping_ID: 563, Cheese_ID: 77, Attribute_ID: 603 }, // Dessert
  { Mapping_ID: 564, Cheese_ID: 77, Attribute_ID: 604 }, // Salad

  // Cambozola (78)
  { Mapping_ID: 565, Cheese_ID: 78, Attribute_ID: 102 }, // Soft
  { Mapping_ID: 566, Cheese_ID: 78, Attribute_ID: 303 }, // Moderate-Melt
  { Mapping_ID: 567, Cheese_ID: 78, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 568, Cheese_ID: 78, Attribute_ID: 201 }, // Buttery
  { Mapping_ID: 569, Cheese_ID: 78, Attribute_ID: 402 }, // Mild funkiness
  { Mapping_ID: 570, Cheese_ID: 78, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 571, Cheese_ID: 78, Attribute_ID: 603 }, // Dessert
  { Mapping_ID: 572, Cheese_ID: 78, Attribute_ID: 605 }, // Appetizer

  // Triple Cream Brie (79)
  { Mapping_ID: 573, Cheese_ID: 79, Attribute_ID: 102 }, // Soft
  { Mapping_ID: 574, Cheese_ID: 79, Attribute_ID: 303 }, // Moderate-Melt
  { Mapping_ID: 575, Cheese_ID: 79, Attribute_ID: 201 }, // Buttery
  { Mapping_ID: 576, Cheese_ID: 79, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 577, Cheese_ID: 79, Attribute_ID: 402 }, // Mild funkiness
  { Mapping_ID: 578, Cheese_ID: 79, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 579, Cheese_ID: 79, Attribute_ID: 603 }, // Dessert
  { Mapping_ID: 580, Cheese_ID: 79, Attribute_ID: 605 }, // Appetizer

  // Brillat-Savarin (80)
  { Mapping_ID: 581, Cheese_ID: 80, Attribute_ID: 102 }, // Soft
  { Mapping_ID: 582, Cheese_ID: 80, Attribute_ID: 303 }, // Moderate-Melt
  { Mapping_ID: 583, Cheese_ID: 80, Attribute_ID: 201 }, // Buttery
  { Mapping_ID: 584, Cheese_ID: 80, Attribute_ID: 203 }, // Tangy
  { Mapping_ID: 585, Cheese_ID: 80, Attribute_ID: 402 }, // Mild funkiness
  { Mapping_ID: 586, Cheese_ID: 80, Attribute_ID: 503 }, // Artisanal
  { Mapping_ID: 587, Cheese_ID: 80, Attribute_ID: 603 }, // Dessert
  { Mapping_ID: 588, Cheese_ID: 80, Attribute_ID: 605 }, // Appetizer

  // Queso Blanco (81)
  { Mapping_ID: 589, Cheese_ID: 81, Attribute_ID: 102 }, // Soft
  { Mapping_ID: 590, Cheese_ID: 81, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 591, Cheese_ID: 81, Attribute_ID: 207 }, // Fresh
  { Mapping_ID: 592, Cheese_ID: 81, Attribute_ID: 208 }, // Milky
  { Mapping_ID: 593, Cheese_ID: 81, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 594, Cheese_ID: 81, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 595, Cheese_ID: 81, Attribute_ID: 601 }, // Cooking
  { Mapping_ID: 596, Cheese_ID: 81, Attribute_ID: 608 }, // Grilling

  // Chihuahua (82)
  { Mapping_ID: 597, Cheese_ID: 82, Attribute_ID: 103 }, // Semi-Soft
  { Mapping_ID: 598, Cheese_ID: 82, Attribute_ID: 304 }, // High-Melt
  { Mapping_ID: 599, Cheese_ID: 82, Attribute_ID: 201 }, // Buttery
  { Mapping_ID: 600, Cheese_ID: 82, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 601, Cheese_ID: 82, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 602, Cheese_ID: 82, Attribute_ID: 601 }, // Cooking

  // Asadero (83)
  { Mapping_ID: 603, Cheese_ID: 83, Attribute_ID: 103 }, // Semi-Soft
  { Mapping_ID: 604, Cheese_ID: 83, Attribute_ID: 304 }, // High-Melt
  { Mapping_ID: 605, Cheese_ID: 83, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 606, Cheese_ID: 83, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 607, Cheese_ID: 83, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 608, Cheese_ID: 83, Attribute_ID: 601 }, // Cooking

  // Requeson (84)
  { Mapping_ID: 609, Cheese_ID: 84, Attribute_ID: 101 }, // Very Soft
  { Mapping_ID: 610, Cheese_ID: 84, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 611, Cheese_ID: 84, Attribute_ID: 207 }, // Fresh
  { Mapping_ID: 612, Cheese_ID: 84, Attribute_ID: 208 }, // Milky
  { Mapping_ID: 613, Cheese_ID: 84, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 614, Cheese_ID: 84, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 615, Cheese_ID: 84, Attribute_ID: 601 }, // Cooking

  // Jibneh Arabieh (85)
  { Mapping_ID: 616, Cheese_ID: 85, Attribute_ID: 102 }, // Soft
  { Mapping_ID: 617, Cheese_ID: 85, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 618, Cheese_ID: 85, Attribute_ID: 206 }, // Salty
  { Mapping_ID: 619, Cheese_ID: 85, Attribute_ID: 203 }, // Tangy
  { Mapping_ID: 620, Cheese_ID: 85, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 621, Cheese_ID: 85, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 622, Cheese_ID: 85, Attribute_ID: 602 }, // Snacking
  { Mapping_ID: 623, Cheese_ID: 85, Attribute_ID: 604 }, // Salad

  // Shanklish (86)
  { Mapping_ID: 624, Cheese_ID: 86, Attribute_ID: 103 }, // Semi-Soft (crumbly)
  { Mapping_ID: 625, Cheese_ID: 86, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 626, Cheese_ID: 86, Attribute_ID: 215 }, // Sharp
  { Mapping_ID: 627, Cheese_ID: 86, Attribute_ID: 704 }, // Herbs inclusion
  { Mapping_ID: 628, Cheese_ID: 86, Attribute_ID: 403 }, // Aromatic funkiness
  { Mapping_ID: 629, Cheese_ID: 86, Attribute_ID: 503 }, // Artisanal
  { Mapping_ID: 630, Cheese_ID: 86, Attribute_ID: 605 }, // Appetizer
  { Mapping_ID: 631, Cheese_ID: 86, Attribute_ID: 604 }, // Salad

  // Kashkaval (87)
  { Mapping_ID: 632, Cheese_ID: 87, Attribute_ID: 104 }, // Semi-Hard
  { Mapping_ID: 633, Cheese_ID: 87, Attribute_ID: 303 }, // Moderate-Melt
  { Mapping_ID: 634, Cheese_ID: 87, Attribute_ID: 203 }, // Tangy
  { Mapping_ID: 635, Cheese_ID: 87, Attribute_ID: 202 }, // Nutty
  { Mapping_ID: 636, Cheese_ID: 87, Attribute_ID: 402 }, // Mild funkiness
  { Mapping_ID: 637, Cheese_ID: 87, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 638, Cheese_ID: 87, Attribute_ID: 601 }, // Cooking
  { Mapping_ID: 639, Cheese_ID: 87, Attribute_ID: 602 }, // Snacking

  // Bandel (88)
  { Mapping_ID: 640, Cheese_ID: 88, Attribute_ID: 104 }, // Semi-Hard
  { Mapping_ID: 641, Cheese_ID: 88, Attribute_ID: 302 }, // Low-Melt
  { Mapping_ID: 642, Cheese_ID: 88, Attribute_ID: 203 }, // Tangy
  { Mapping_ID: 643, Cheese_ID: 88, Attribute_ID: 206 }, // Salty
  { Mapping_ID: 644, Cheese_ID: 88, Attribute_ID: 402 }, // Mild funkiness
  { Mapping_ID: 645, Cheese_ID: 88, Attribute_ID: 503 }, // Artisanal
  { Mapping_ID: 646, Cheese_ID: 88, Attribute_ID: 602 }, // Snacking
  { Mapping_ID: 647, Cheese_ID: 88, Attribute_ID: 601 }, // Cooking

  // Surati (89)
  { Mapping_ID: 648, Cheese_ID: 89, Attribute_ID: 101 }, // Very Soft
  { Mapping_ID: 649, Cheese_ID: 89, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 650, Cheese_ID: 89, Attribute_ID: 207 }, // Fresh
  { Mapping_ID: 651, Cheese_ID: 89, Attribute_ID: 210 }, // Sweet
  { Mapping_ID: 652, Cheese_ID: 89, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 653, Cheese_ID: 89, Attribute_ID: 503 }, // Artisanal
  { Mapping_ID: 654, Cheese_ID: 89, Attribute_ID: 603 }, // Dessert
  { Mapping_ID: 655, Cheese_ID: 89, Attribute_ID: 601 }, // Cooking

  // Bocconcini (90)
  { Mapping_ID: 656, Cheese_ID: 90, Attribute_ID: 101 }, // Very Soft
  { Mapping_ID: 657, Cheese_ID: 90, Attribute_ID: 304 }, // High-Melt
  { Mapping_ID: 658, Cheese_ID: 90, Attribute_ID: 208 }, // Milky
  { Mapping_ID: 659, Cheese_ID: 90, Attribute_ID: 207 }, // Fresh
  { Mapping_ID: 660, Cheese_ID: 90, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 661, Cheese_ID: 90, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 662, Cheese_ID: 90, Attribute_ID: 604 }, // Salad
  { Mapping_ID: 663, Cheese_ID: 90, Attribute_ID: 605 }, // Appetizer

  // Burrata (91)
  { Mapping_ID: 664, Cheese_ID: 91, Attribute_ID: 101 }, // Very Soft
  { Mapping_ID: 665, Cheese_ID: 91, Attribute_ID: 301 }, // Non-Melting (should be eaten fresh)
  { Mapping_ID: 666, Cheese_ID: 91, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 667, Cheese_ID: 91, Attribute_ID: 207 }, // Fresh
  { Mapping_ID: 668, Cheese_ID: 91, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 669, Cheese_ID: 91, Attribute_ID: 503 }, // Artisanal
  { Mapping_ID: 670, Cheese_ID: 91, Attribute_ID: 605 }, // Appetizer
  { Mapping_ID: 671, Cheese_ID: 91, Attribute_ID: 604 }, // Salad

  // Ricotta Salata (92)
  { Mapping_ID: 672, Cheese_ID: 92, Attribute_ID: 104 }, // Semi-Hard (firm)
  { Mapping_ID: 673, Cheese_ID: 92, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 674, Cheese_ID: 92, Attribute_ID: 206 }, // Salty
  { Mapping_ID: 675, Cheese_ID: 92, Attribute_ID: 210 }, // Sweet
  { Mapping_ID: 676, Cheese_ID: 92, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 677, Cheese_ID: 92, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 678, Cheese_ID: 92, Attribute_ID: 604 }, // Salad
  { Mapping_ID: 679, Cheese_ID: 92, Attribute_ID: 607 }, // Seasoning

  // Queso de Freir (93)
  { Mapping_ID: 680, Cheese_ID: 93, Attribute_ID: 104 }, // Semi-Hard
  { Mapping_ID: 681, Cheese_ID: 93, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 682, Cheese_ID: 93, Attribute_ID: 206 }, // Salty
  { Mapping_ID: 683, Cheese_ID: 93, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 684, Cheese_ID: 93, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 685, Cheese_ID: 93, Attribute_ID: 608 }, // Grilling
  { Mapping_ID: 686, Cheese_ID: 93, Attribute_ID: 601 }, // Cooking

  // Bread Cheese (94)
  { Mapping_ID: 687, Cheese_ID: 94, Attribute_ID: 104 }, // Semi-Hard
  { Mapping_ID: 688, Cheese_ID: 94, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 689, Cheese_ID: 94, Attribute_ID: 208 }, // Milky
  { Mapping_ID: 690, Cheese_ID: 94, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 691, Cheese_ID: 94, Attribute_ID: 503 }, // Artisanal
  { Mapping_ID: 692, Cheese_ID: 94, Attribute_ID: 608 }, // Grilling
  { Mapping_ID: 693, Cheese_ID: 94, Attribute_ID: 602 }, // Snacking

  // American Alpine-Style (95)
  { Mapping_ID: 694, Cheese_ID: 95, Attribute_ID: 105 }, // Hard
  { Mapping_ID: 695, Cheese_ID: 95, Attribute_ID: 303 }, // Moderate-Melt
  { Mapping_ID: 696, Cheese_ID: 95, Attribute_ID: 202 }, // Nutty
  { Mapping_ID: 697, Cheese_ID: 95, Attribute_ID: 211 }, // Fruity
  { Mapping_ID: 698, Cheese_ID: 95, Attribute_ID: 403 }, // Aromatic funkiness
  { Mapping_ID: 699, Cheese_ID: 95, Attribute_ID: 503 }, // Artisanal
  { Mapping_ID: 700, Cheese_ID: 95, Attribute_ID: 602 }, // Snacking
  { Mapping_ID: 701, Cheese_ID: 95, Attribute_ID: 605 }, // Appetizer

  // Grape Leaf-Wrapped Blue (96)
  { Mapping_ID: 702, Cheese_ID: 96, Attribute_ID: 103 }, // Semi-Soft
  { Mapping_ID: 703, Cheese_ID: 96, Attribute_ID: 302 }, // Low-Melt
  { Mapping_ID: 704, Cheese_ID: 96, Attribute_ID: 211 }, // Fruity
  { Mapping_ID: 705, Cheese_ID: 96, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 706, Cheese_ID: 96, Attribute_ID: 403 }, // Aromatic funkiness
  { Mapping_ID: 707, Cheese_ID: 96, Attribute_ID: 503 }, // Artisanal
  { Mapping_ID: 708, Cheese_ID: 96, Attribute_ID: 603 }, // Dessert
  { Mapping_ID: 709, Cheese_ID: 96, Attribute_ID: 605 }, // Appetizer

  // Coffee-Rubbed Cheddar (97)
  { Mapping_ID: 710, Cheese_ID: 97, Attribute_ID: 105 }, // Hard
  { Mapping_ID: 711, Cheese_ID: 97, Attribute_ID: 302 }, // Low-Melt
  { Mapping_ID: 712, Cheese_ID: 97, Attribute_ID: 215 }, // Sharp
  { Mapping_ID: 713, Cheese_ID: 97, Attribute_ID: 704 }, // Herbs inclusion (lavender)
  { Mapping_ID: 714, Cheese_ID: 97, Attribute_ID: 403 }, // Aromatic funkiness
  { Mapping_ID: 715, Cheese_ID: 97, Attribute_ID: 503 }, // Artisanal
  { Mapping_ID: 716, Cheese_ID: 97, Attribute_ID: 602 }, // Snacking
  { Mapping_ID: 717, Cheese_ID: 97, Attribute_ID: 605 }, // Appetizer

  // Sheep's Milk Ricotta (98)
  { Mapping_ID: 718, Cheese_ID: 98, Attribute_ID: 101 }, // Very Soft
  { Mapping_ID: 719, Cheese_ID: 98, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 720, Cheese_ID: 98, Attribute_ID: 210 }, // Sweet
  { Mapping_ID: 721, Cheese_ID: 98, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 722, Cheese_ID: 98, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 723, Cheese_ID: 98, Attribute_ID: 503 }, // Artisanal
  { Mapping_ID: 724, Cheese_ID: 98, Attribute_ID: 601 }, // Cooking
  { Mapping_ID: 725, Cheese_ID: 98, Attribute_ID: 609 }, // Baking

  // Raclette (99)
  { Mapping_ID: 726, Cheese_ID: 99, Attribute_ID: 104 }, // Semi-Hard
  { Mapping_ID: 727, Cheese_ID: 99, Attribute_ID: 304 }, // High-Melt
  { Mapping_ID: 728, Cheese_ID: 99, Attribute_ID: 202 }, // Nutty
  { Mapping_ID: 729, Cheese_ID: 99, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 730, Cheese_ID: 99, Attribute_ID: 402 }, // Mild funkiness
  { Mapping_ID: 731, Cheese_ID: 99, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 732, Cheese_ID: 99, Attribute_ID: 601 }, // Cooking
  { Mapping_ID: 733, Cheese_ID: 99, Attribute_ID: 606 }, // Fondue

  // Morbier (100)
  { Mapping_ID: 734, Cheese_ID: 100, Attribute_ID: 103 }, // Semi-Soft
  { Mapping_ID: 735, Cheese_ID: 100, Attribute_ID: 303 }, // Moderate-Melt
  { Mapping_ID: 736, Cheese_ID: 100, Attribute_ID: 211 }, // Fruity
  { Mapping_ID: 737, Cheese_ID: 100, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 738, Cheese_ID: 100, Attribute_ID: 402 }, // Mild funkiness
  { Mapping_ID: 739, Cheese_ID: 100, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 740, Cheese_ID: 100, Attribute_ID: 602 }, // Snacking
  { Mapping_ID: 741, Cheese_ID: 100, Attribute_ID: 605 }, // Appetizer

  // Fontina Val d'Aosta (101)
  { Mapping_ID: 742, Cheese_ID: 101, Attribute_ID: 104 }, // Semi-Hard
  { Mapping_ID: 743, Cheese_ID: 101, Attribute_ID: 304 }, // High-Melt
  { Mapping_ID: 744, Cheese_ID: 101, Attribute_ID: 202 }, // Nutty
  { Mapping_ID: 745, Cheese_ID: 101, Attribute_ID: 204 }, // Earthy
  { Mapping_ID: 746, Cheese_ID: 101, Attribute_ID: 402 }, // Mild funkiness
  { Mapping_ID: 747, Cheese_ID: 101, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 748, Cheese_ID: 101, Attribute_ID: 601 }, // Cooking
  { Mapping_ID: 749, Cheese_ID: 101, Attribute_ID: 606 }, // Fondue

  // Port Salut (102)
  { Mapping_ID: 750, Cheese_ID: 102, Attribute_ID: 103 }, // Semi-Soft
  { Mapping_ID: 751, Cheese_ID: 102, Attribute_ID: 303 }, // Moderate-Melt
  { Mapping_ID: 752, Cheese_ID: 102, Attribute_ID: 201 }, // Buttery
  { Mapping_ID: 753, Cheese_ID: 102, Attribute_ID: 402 }, // Mild funkiness
  { Mapping_ID: 754, Cheese_ID: 102, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 755, Cheese_ID: 102, Attribute_ID: 602 }, // Snacking
  { Mapping_ID: 756, Cheese_ID: 102, Attribute_ID: 601 }, // Cooking

  // Limburger (103)
  { Mapping_ID: 757, Cheese_ID: 103, Attribute_ID: 102 }, // Soft
  { Mapping_ID: 758, Cheese_ID: 103, Attribute_ID: 303 }, // Moderate-Melt
  { Mapping_ID: 759, Cheese_ID: 103, Attribute_ID: 205 }, // Pungent
  { Mapping_ID: 760, Cheese_ID: 103, Attribute_ID: 404 }, // Intense funkiness
  { Mapping_ID: 761, Cheese_ID: 103, Attribute_ID: 503 }, // Artisanal
  { Mapping_ID: 762, Cheese_ID: 103, Attribute_ID: 602 }, // Snacking

  // Jarlsberg (104)
  { Mapping_ID: 763, Cheese_ID: 104, Attribute_ID: 104 }, // Semi-Hard
  { Mapping_ID: 764, Cheese_ID: 104, Attribute_ID: 303 }, // Moderate-Melt
  { Mapping_ID: 765, Cheese_ID: 104, Attribute_ID: 202 }, // Nutty
  { Mapping_ID: 766, Cheese_ID: 104, Attribute_ID: 210 }, // Sweet
  { Mapping_ID: 767, Cheese_ID: 104, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 768, Cheese_ID: 104, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 769, Cheese_ID: 104, Attribute_ID: 601 }, // Cooking
  { Mapping_ID: 770, Cheese_ID: 104, Attribute_ID: 602 }, // Snacking

  // Boursin (105)
  { Mapping_ID: 771, Cheese_ID: 105, Attribute_ID: 101 }, // Very Soft
  { Mapping_ID: 772, Cheese_ID: 105, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 773, Cheese_ID: 105, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 774, Cheese_ID: 105, Attribute_ID: 704 }, // Herbs inclusion
  { Mapping_ID: 775, Cheese_ID: 105, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 776, Cheese_ID: 105, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 777, Cheese_ID: 105, Attribute_ID: 610 }, // Spread
  { Mapping_ID: 778, Cheese_ID: 105, Attribute_ID: 605 }, // Appetizer

  // Crottin de Chavignol (106)
  { Mapping_ID: 779, Cheese_ID: 106, Attribute_ID: 104 }, // Semi-Hard
  { Mapping_ID: 780, Cheese_ID: 106, Attribute_ID: 302 }, // Low-Melt
  { Mapping_ID: 781, Cheese_ID: 106, Attribute_ID: 203 }, // Tangy
  { Mapping_ID: 782, Cheese_ID: 106, Attribute_ID: 202 }, // Nutty
  { Mapping_ID: 783, Cheese_ID: 106, Attribute_ID: 402 }, // Mild funkiness
  { Mapping_ID: 784, Cheese_ID: 106, Attribute_ID: 503 }, // Artisanal
  { Mapping_ID: 785, Cheese_ID: 106, Attribute_ID: 602 }, // Snacking
  { Mapping_ID: 786, Cheese_ID: 106, Attribute_ID: 605 }, // Appetizer

  // Bucheron (107)
  { Mapping_ID: 787, Cheese_ID: 107, Attribute_ID: 102 }, // Soft
  { Mapping_ID: 788, Cheese_ID: 107, Attribute_ID: 302 }, // Low-Melt
  { Mapping_ID: 789, Cheese_ID: 107, Attribute_ID: 203 }, // Tangy
  { Mapping_ID: 790, Cheese_ID: 107, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 791, Cheese_ID: 107, Attribute_ID: 402 }, // Mild funkiness
  { Mapping_ID: 792, Cheese_ID: 107, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 793, Cheese_ID: 107, Attribute_ID: 602 }, // Snacking
  { Mapping_ID: 794, Cheese_ID: 107, Attribute_ID: 605 }, // Appetizer

  // Garrotxa (108)
  { Mapping_ID: 795, Cheese_ID: 108, Attribute_ID: 104 }, // Semi-Hard
  { Mapping_ID: 796, Cheese_ID: 108, Attribute_ID: 302 }, // Low-Melt
  { Mapping_ID: 797, Cheese_ID: 108, Attribute_ID: 202 }, // Nutty
  { Mapping_ID: 798, Cheese_ID: 108, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 799, Cheese_ID: 108, Attribute_ID: 503 }, // Artisanal
  { Mapping_ID: 800, Cheese_ID: 108, Attribute_ID: 602 }, // Snacking
  { Mapping_ID: 801, Cheese_ID: 108, Attribute_ID: 605 }, // Appetizer

  // Wensleydale with Cranberries (109)
  { Mapping_ID: 802, Cheese_ID: 109, Attribute_ID: 104 }, // Semi-Hard (firm)
  { Mapping_ID: 803, Cheese_ID: 109, Attribute_ID: 302 }, // Low-Melt
  { Mapping_ID: 804, Cheese_ID: 109, Attribute_ID: 210 }, // Sweet
  { Mapping_ID: 805, Cheese_ID: 109, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 806, Cheese_ID: 109, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 807, Cheese_ID: 109, Attribute_ID: 602 }, // Snacking
  { Mapping_ID: 808, Cheese_ID: 109, Attribute_ID: 603 }, // Dessert

  // Truffle Pecorino (110)
  { Mapping_ID: 809, Cheese_ID: 110, Attribute_ID: 105 }, // Hard
  { Mapping_ID: 810, Cheese_ID: 110, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 811, Cheese_ID: 110, Attribute_ID: 202 }, // Nutty
  { Mapping_ID: 812, Cheese_ID: 110, Attribute_ID: 204 }, // Earthy
  { Mapping_ID: 813, Cheese_ID: 110, Attribute_ID: 705 }, // Truffles inclusion
  { Mapping_ID: 814, Cheese_ID: 110, Attribute_ID: 403 }, // Aromatic funkiness
  { Mapping_ID: 815, Cheese_ID: 110, Attribute_ID: 503 }, // Artisanal
  { Mapping_ID: 816, Cheese_ID: 110, Attribute_ID: 607 }, // Seasoning
  { Mapping_ID: 817, Cheese_ID: 110, Attribute_ID: 605 }, // Appetizer

  // Queso Añejo (111)
  { Mapping_ID: 818, Cheese_ID: 111, Attribute_ID: 105 }, // Hard
  { Mapping_ID: 819, Cheese_ID: 111, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 820, Cheese_ID: 111, Attribute_ID: 206 }, // Salty
  { Mapping_ID: 821, Cheese_ID: 111, Attribute_ID: 215 }, // Sharp
  { Mapping_ID: 822, Cheese_ID: 111, Attribute_ID: 402 }, // Mild funkiness
  { Mapping_ID: 823, Cheese_ID: 111, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 824, Cheese_ID: 111, Attribute_ID: 607 }, // Seasoning
  { Mapping_ID: 825, Cheese_ID: 111, Attribute_ID: 601 }, // Cooking

  // Queijo de Minas Curado (112)
  { Mapping_ID: 826, Cheese_ID: 112, Attribute_ID: 105 }, // Hard
  { Mapping_ID: 827, Cheese_ID: 112, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 828, Cheese_ID: 112, Attribute_ID: 215 }, // Sharp
  { Mapping_ID: 829, Cheese_ID: 112, Attribute_ID: 203 }, // Tangy
  { Mapping_ID: 830, Cheese_ID: 112, Attribute_ID: 402 }, // Mild funkiness
  { Mapping_ID: 831, Cheese_ID: 112, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 832, Cheese_ID: 112, Attribute_ID: 602 }, // Snacking
  { Mapping_ID: 833, Cheese_ID: 112, Attribute_ID: 601 }, // Cooking

  // Quark (113)
  { Mapping_ID: 834, Cheese_ID: 113, Attribute_ID: 101 }, // Very Soft
  { Mapping_ID: 835, Cheese_ID: 113, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 836, Cheese_ID: 113, Attribute_ID: 203 }, // Tangy
  { Mapping_ID: 837, Cheese_ID: 113, Attribute_ID: 207 }, // Fresh
  { Mapping_ID: 838, Cheese_ID: 113, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 839, Cheese_ID: 113, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 840, Cheese_ID: 113, Attribute_ID: 609 }, // Baking
  { Mapping_ID: 841, Cheese_ID: 113, Attribute_ID: 610 }, // Spread

  // Mascarpone (114)
  { Mapping_ID: 842, Cheese_ID: 114, Attribute_ID: 101 }, // Very Soft
  { Mapping_ID: 843, Cheese_ID: 114, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 844, Cheese_ID: 114, Attribute_ID: 210 }, // Sweet
  { Mapping_ID: 845, Cheese_ID: 114, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 846, Cheese_ID: 114, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 847, Cheese_ID: 114, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 848, Cheese_ID: 114, Attribute_ID: 603 }, // Dessert
  { Mapping_ID: 849, Cheese_ID: 114, Attribute_ID: 609 }, // Baking

  // Fromage Blanc (115)
  { Mapping_ID: 850, Cheese_ID: 115, Attribute_ID: 101 }, // Very Soft
  { Mapping_ID: 851, Cheese_ID: 115, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 852, Cheese_ID: 115, Attribute_ID: 203 }, // Tangy
  { Mapping_ID: 853, Cheese_ID: 115, Attribute_ID: 207 }, // Fresh
  { Mapping_ID: 854, Cheese_ID: 115, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 855, Cheese_ID: 115, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 856, Cheese_ID: 115, Attribute_ID: 610 }, // Spread
  { Mapping_ID: 857, Cheese_ID: 115, Attribute_ID: 603 }, // Dessert

  // Scamorza (116)
  { Mapping_ID: 858, Cheese_ID: 116, Attribute_ID: 104 }, // Semi-Hard
  { Mapping_ID: 859, Cheese_ID: 116, Attribute_ID: 303 }, // Moderate-Melt
  { Mapping_ID: 860, Cheese_ID: 116, Attribute_ID: 208 }, // Milky
  { Mapping_ID: 861, Cheese_ID: 116, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 862, Cheese_ID: 116, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 863, Cheese_ID: 116, Attribute_ID: 601 }, // Cooking
  { Mapping_ID: 864, Cheese_ID: 116, Attribute_ID: 608 }, // Grilling

  // Cantal (117)
  { Mapping_ID: 865, Cheese_ID: 117, Attribute_ID: 104 }, // Semi-Hard
  { Mapping_ID: 866, Cheese_ID: 117, Attribute_ID: 303 }, // Moderate-Melt
  { Mapping_ID: 867, Cheese_ID: 117, Attribute_ID: 202 }, // Nutty
  { Mapping_ID: 868, Cheese_ID: 117, Attribute_ID: 201 }, // Buttery
  { Mapping_ID: 869, Cheese_ID: 117, Attribute_ID: 402 }, // Mild funkiness
  { Mapping_ID: 870, Cheese_ID: 117, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 871, Cheese_ID: 117, Attribute_ID: 602 }, // Snacking
  { Mapping_ID: 872, Cheese_ID: 117, Attribute_ID: 601 }, // Cooking

  // Reblochon (118)
  { Mapping_ID: 873, Cheese_ID: 118, Attribute_ID: 102 }, // Soft
  { Mapping_ID: 874, Cheese_ID: 118, Attribute_ID: 304 }, // High-Melt
  { Mapping_ID: 875, Cheese_ID: 118, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 876, Cheese_ID: 118, Attribute_ID: 202 }, // Nutty
  { Mapping_ID: 877, Cheese_ID: 118, Attribute_ID: 402 }, // Mild funkiness
  { Mapping_ID: 878, Cheese_ID: 118, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 879, Cheese_ID: 118, Attribute_ID: 601 }, // Cooking
  { Mapping_ID: 880, Cheese_ID: 118, Attribute_ID: 606 }, // Fondue

  // Provolone Piccante (119)
  { Mapping_ID: 881, Cheese_ID: 119, Attribute_ID: 104 }, // Semi-Hard
  { Mapping_ID: 882, Cheese_ID: 119, Attribute_ID: 303 }, // Moderate-Melt
  { Mapping_ID: 883, Cheese_ID: 119, Attribute_ID: 215 }, // Sharp
  { Mapping_ID: 884, Cheese_ID: 119, Attribute_ID: 203 }, // Tangy
  { Mapping_ID: 885, Cheese_ID: 119, Attribute_ID: 403 }, // Aromatic funkiness
  { Mapping_ID: 886, Cheese_ID: 119, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 887, Cheese_ID: 119, Attribute_ID: 602 }, // Snacking
  { Mapping_ID: 888, Cheese_ID: 119, Attribute_ID: 601 }, // Cooking

  // Red Leicester (120)
  { Mapping_ID: 889, Cheese_ID: 120, Attribute_ID: 104 }, // Semi-Hard
  { Mapping_ID: 890, Cheese_ID: 120, Attribute_ID: 303 }, // Moderate-Melt
  { Mapping_ID: 891, Cheese_ID: 120, Attribute_ID: 202 }, // Nutty
  { Mapping_ID: 892, Cheese_ID: 120, Attribute_ID: 210 }, // Sweet
  { Mapping_ID: 893, Cheese_ID: 120, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 894, Cheese_ID: 120, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 895, Cheese_ID: 120, Attribute_ID: 601 }, // Cooking
  { Mapping_ID: 896, Cheese_ID: 120, Attribute_ID: 602 }, // Snacking

  // Sami Reindeer Cheese (601)
  { Mapping_ID: 897, Cheese_ID: 601, Attribute_ID: 104 }, // Semi-Hard
  { Mapping_ID: 898, Cheese_ID: 601, Attribute_ID: 302 }, // Low-Melt
  { Mapping_ID: 899, Cheese_ID: 601, Attribute_ID: 210 }, // Sweet
  { Mapping_ID: 900, Cheese_ID: 601, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 901, Cheese_ID: 601, Attribute_ID: 402 }, // Mild funkiness
  { Mapping_ID: 902, Cheese_ID: 601, Attribute_ID: 504 }, // Obscure
  { Mapping_ID: 903, Cheese_ID: 601, Attribute_ID: 602 }, // Snacking
  { Mapping_ID: 904, Cheese_ID: 601, Attribute_ID: 603 }, // Dessert

  // Finnish Reindeer Cheese (602)
  { Mapping_ID: 905, Cheese_ID: 602, Attribute_ID: 103 }, // Semi-Soft
  { Mapping_ID: 906, Cheese_ID: 602, Attribute_ID: 303 }, // Moderate-Melt
  { Mapping_ID: 907, Cheese_ID: 602, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 908, Cheese_ID: 602, Attribute_ID: 210 }, // Sweet
  { Mapping_ID: 909, Cheese_ID: 602, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 910, Cheese_ID: 602, Attribute_ID: 504 }, // Obscure
  { Mapping_ID: 911, Cheese_ID: 602, Attribute_ID: 602 }, // Snacking
  { Mapping_ID: 912, Cheese_ID: 602, Attribute_ID: 605 }, // Appetizer

  // Swedish Reindeer Fresh (603)
  { Mapping_ID: 913, Cheese_ID: 603, Attribute_ID: 102 }, // Soft
  { Mapping_ID: 914, Cheese_ID: 603, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 915, Cheese_ID: 603, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 916, Cheese_ID: 603, Attribute_ID: 201 }, // Buttery
  { Mapping_ID: 917, Cheese_ID: 603, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 918, Cheese_ID: 603, Attribute_ID: 504 }, // Obscure
  { Mapping_ID: 919, Cheese_ID: 603, Attribute_ID: 610 }, // Spread
  { Mapping_ID: 920, Cheese_ID: 603, Attribute_ID: 602 }, // Snacking

  // Lapland Aged Reindeer (604)
  { Mapping_ID: 921, Cheese_ID: 604, Attribute_ID: 105 }, // Hard
  { Mapping_ID: 922, Cheese_ID: 604, Attribute_ID: 302 }, // Low-Melt
  { Mapping_ID: 923, Cheese_ID: 604, Attribute_ID: 210 }, // Sweet
  { Mapping_ID: 924, Cheese_ID: 604, Attribute_ID: 202 }, // Nutty
  { Mapping_ID: 925, Cheese_ID: 604, Attribute_ID: 403 }, // Aromatic funkiness
  { Mapping_ID: 926, Cheese_ID: 604, Attribute_ID: 504 }, // Obscure
  { Mapping_ID: 927, Cheese_ID: 604, Attribute_ID: 602 }, // Snacking
  { Mapping_ID: 928, Cheese_ID: 604, Attribute_ID: 607 }, // Seasoning

  // Russian Reindeer Cheese (605)
  { Mapping_ID: 929, Cheese_ID: 605, Attribute_ID: 103 }, // Semi-Soft
  { Mapping_ID: 930, Cheese_ID: 605, Attribute_ID: 302 }, // Low-Melt
  { Mapping_ID: 931, Cheese_ID: 605, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 932, Cheese_ID: 605, Attribute_ID: 206 }, // Salty
  { Mapping_ID: 933, Cheese_ID: 605, Attribute_ID: 402 }, // Mild funkiness
  { Mapping_ID: 934, Cheese_ID: 605, Attribute_ID: 504 }, // Obscure
  { Mapping_ID: 935, Cheese_ID: 605, Attribute_ID: 602 }, // Snacking

  // Norwegian Reindeer Cream (606)
  { Mapping_ID: 936, Cheese_ID: 606, Attribute_ID: 102 }, // Soft
  { Mapping_ID: 937, Cheese_ID: 606, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 938, Cheese_ID: 606, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 939, Cheese_ID: 606, Attribute_ID: 210 }, // Sweet
  { Mapping_ID: 940, Cheese_ID: 606, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 941, Cheese_ID: 606, Attribute_ID: 504 }, // Obscure
  { Mapping_ID: 942, Cheese_ID: 606, Attribute_ID: 610 }, // Spread
  { Mapping_ID: 943, Cheese_ID: 606, Attribute_ID: 603 }, // Dessert

  // Sami Smoked Reindeer (607)
  { Mapping_ID: 944, Cheese_ID: 607, Attribute_ID: 104 }, // Semi-Hard
  { Mapping_ID: 945, Cheese_ID: 607, Attribute_ID: 302 }, // Low-Melt
  { Mapping_ID: 946, Cheese_ID: 607, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 947, Cheese_ID: 607, Attribute_ID: 204 }, // Earthy
  { Mapping_ID: 948, Cheese_ID: 607, Attribute_ID: 403 }, // Aromatic funkiness
  { Mapping_ID: 949, Cheese_ID: 607, Attribute_ID: 504 }, // Obscure
  { Mapping_ID: 950, Cheese_ID: 607, Attribute_ID: 602 }, // Snacking
  { Mapping_ID: 951, Cheese_ID: 607, Attribute_ID: 605 }, // Appetizer

  // Swedish Moose Cheese (608)
  { Mapping_ID: 952, Cheese_ID: 608, Attribute_ID: 104 }, // Semi-Hard
  { Mapping_ID: 953, Cheese_ID: 608, Attribute_ID: 302 }, // Low-Melt
  { Mapping_ID: 954, Cheese_ID: 608, Attribute_ID: 208 }, // Milky
  { Mapping_ID: 955, Cheese_ID: 608, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 956, Cheese_ID: 608, Attribute_ID: 504 }, // Obscure
  { Mapping_ID: 957, Cheese_ID: 608, Attribute_ID: 602 }, // Snacking

  // Russian Elk Cheese (609)
  { Mapping_ID: 958, Cheese_ID: 609, Attribute_ID: 103 }, // Semi-Soft
  { Mapping_ID: 959, Cheese_ID: 609, Attribute_ID: 302 }, // Low-Melt
  { Mapping_ID: 960, Cheese_ID: 609, Attribute_ID: 204 }, // Earthy
  { Mapping_ID: 961, Cheese_ID: 609, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 962, Cheese_ID: 609, Attribute_ID: 402 }, // Mild funkiness
  { Mapping_ID: 963, Cheese_ID: 609, Attribute_ID: 504 }, // Obscure
  { Mapping_ID: 964, Cheese_ID: 609, Attribute_ID: 602 }, // Snacking

  // Moose Cream Cheese (610)
  { Mapping_ID: 965, Cheese_ID: 610, Attribute_ID: 102 }, // Soft
  { Mapping_ID: 966, Cheese_ID: 610, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 967, Cheese_ID: 610, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 968, Cheese_ID: 610, Attribute_ID: 208 }, // Milky
  { Mapping_ID: 969, Cheese_ID: 610, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 970, Cheese_ID: 610, Attribute_ID: 504 }, // Obscure
  { Mapping_ID: 971, Cheese_ID: 610, Attribute_ID: 610 }, // Spread

  // Aged Moose Cheese (611)
  { Mapping_ID: 972, Cheese_ID: 611, Attribute_ID: 105 }, // Hard
  { Mapping_ID: 973, Cheese_ID: 611, Attribute_ID: 302 }, // Low-Melt
  { Mapping_ID: 974, Cheese_ID: 611, Attribute_ID: 202 }, // Nutty
  { Mapping_ID: 975, Cheese_ID: 611, Attribute_ID: 204 }, // Earthy
  { Mapping_ID: 976, Cheese_ID: 611, Attribute_ID: 403 }, // Aromatic funkiness
  { Mapping_ID: 977, Cheese_ID: 611, Attribute_ID: 504 }, // Obscure
  { Mapping_ID: 978, Cheese_ID: 611, Attribute_ID: 602 }, // Snacking
  { Mapping_ID: 979, Cheese_ID: 611, Attribute_ID: 607 }, // Seasoning

  // Moose Blue (612)
  { Mapping_ID: 980, Cheese_ID: 612, Attribute_ID: 103 }, // Semi-Soft
  { Mapping_ID: 981, Cheese_ID: 612, Attribute_ID: 302 }, // Low-Melt
  { Mapping_ID: 982, Cheese_ID: 612, Attribute_ID: 215 }, // Sharp
  { Mapping_ID: 983, Cheese_ID: 612, Attribute_ID: 204 }, // Earthy
  { Mapping_ID: 984, Cheese_ID: 612, Attribute_ID: 403 }, // Aromatic funkiness
  { Mapping_ID: 985, Cheese_ID: 612, Attribute_ID: 504 }, // Obscure
  { Mapping_ID: 986, Cheese_ID: 612, Attribute_ID: 602 }, // Snacking
  { Mapping_ID: 987, Cheese_ID: 612, Attribute_ID: 603 }, // Dessert

  // Pule (613)
  { Mapping_ID: 988, Cheese_ID: 613, Attribute_ID: 103 }, // Semi-Soft (crumbly texture)
  { Mapping_ID: 989, Cheese_ID: 613, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 990, Cheese_ID: 613, Attribute_ID: 210 }, // Sweet
  { Mapping_ID: 991, Cheese_ID: 613, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 992, Cheese_ID: 613, Attribute_ID: 504 }, // Obscure
  { Mapping_ID: 993, Cheese_ID: 613, Attribute_ID: 602 }, // Snacking
  { Mapping_ID: 994, Cheese_ID: 613, Attribute_ID: 603 }, // Dessert

  // Italian Donkey Cheese (614)
  { Mapping_ID: 995, Cheese_ID: 614, Attribute_ID: 102 }, // Soft
  { Mapping_ID: 996, Cheese_ID: 614, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 997, Cheese_ID: 614, Attribute_ID: 210 }, // Sweet
  { Mapping_ID: 998, Cheese_ID: 614, Attribute_ID: 208 }, // Milky
  { Mapping_ID: 999, Cheese_ID: 614, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 1000, Cheese_ID: 614, Attribute_ID: 504 }, // Obscure
  { Mapping_ID: 1001, Cheese_ID: 614, Attribute_ID: 610 }, // Spread

  // Balkan Donkey Fresh (615)
  { Mapping_ID: 1002, Cheese_ID: 615, Attribute_ID: 102 }, // Soft
  { Mapping_ID: 1003, Cheese_ID: 615, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 1004, Cheese_ID: 615, Attribute_ID: 207 }, // Fresh
  { Mapping_ID: 1005, Cheese_ID: 615, Attribute_ID: 210 }, // Sweet
  { Mapping_ID: 1006, Cheese_ID: 615, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 1007, Cheese_ID: 615, Attribute_ID: 504 }, // Obscure
  { Mapping_ID: 1008, Cheese_ID: 615, Attribute_ID: 610 }, // Spread

  // Croatian Donkey Cheese (616)
  { Mapping_ID: 1009, Cheese_ID: 616, Attribute_ID: 103 }, // Semi-Soft (crumbly)
  { Mapping_ID: 1010, Cheese_ID: 616, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 1011, Cheese_ID: 616, Attribute_ID: 210 }, // Sweet
  { Mapping_ID: 1012, Cheese_ID: 616, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 1013, Cheese_ID: 616, Attribute_ID: 504 }, // Obscure
  { Mapping_ID: 1014, Cheese_ID: 616, Attribute_ID: 602 }, // Snacking

  // Aged Pule (617)
  { Mapping_ID: 1015, Cheese_ID: 617, Attribute_ID: 104 }, // Semi-Hard
  { Mapping_ID: 1016, Cheese_ID: 617, Attribute_ID: 302 }, // Low-Melt
  { Mapping_ID: 1017, Cheese_ID: 617, Attribute_ID: 210 }, // Sweet
  { Mapping_ID: 1018, Cheese_ID: 617, Attribute_ID: 202 }, // Nutty
  { Mapping_ID: 1019, Cheese_ID: 617, Attribute_ID: 402 }, // Mild funkiness
  { Mapping_ID: 1020, Cheese_ID: 617, Attribute_ID: 504 }, // Obscure
  { Mapping_ID: 1021, Cheese_ID: 617, Attribute_ID: 602 }, // Snacking
  { Mapping_ID: 1022, Cheese_ID: 617, Attribute_ID: 607 }, // Seasoning

  // Kazakh Horse Cheese (618)
  { Mapping_ID: 1023, Cheese_ID: 618, Attribute_ID: 103 }, // Semi-Soft (crumbly)
  { Mapping_ID: 1024, Cheese_ID: 618, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 1025, Cheese_ID: 618, Attribute_ID: 203 }, // Tangy
  { Mapping_ID: 1026, Cheese_ID: 618, Attribute_ID: 402 }, // Mild funkiness
  { Mapping_ID: 1027, Cheese_ID: 618, Attribute_ID: 503 }, // Artisanal
  { Mapping_ID: 1028, Cheese_ID: 618, Attribute_ID: 602 }, // Snacking

  // Mongolian Airag Cheese (619)
  { Mapping_ID: 1029, Cheese_ID: 619, Attribute_ID: 103 }, // Semi-Soft (crumbly)
  { Mapping_ID: 1030, Cheese_ID: 619, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 1031, Cheese_ID: 619, Attribute_ID: 203 }, // Tangy
  { Mapping_ID: 1032, Cheese_ID: 619, Attribute_ID: 206 }, // Salty
  { Mapping_ID: 1033, Cheese_ID: 619, Attribute_ID: 402 }, // Mild funkiness
  { Mapping_ID: 1034, Cheese_ID: 619, Attribute_ID: 503 }, // Artisanal
  { Mapping_ID: 1035, Cheese_ID: 619, Attribute_ID: 602 }, // Snacking

  // Kurut (620)
  { Mapping_ID: 1036, Cheese_ID: 620, Attribute_ID: 105 }, // Hard
  { Mapping_ID: 1037, Cheese_ID: 620, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 1038, Cheese_ID: 620, Attribute_ID: 203 }, // Tangy
  { Mapping_ID: 1039, Cheese_ID: 620, Attribute_ID: 206 }, // Salty
  { Mapping_ID: 1040, Cheese_ID: 620, Attribute_ID: 403 }, // Aromatic funkiness
  { Mapping_ID: 1041, Cheese_ID: 620, Attribute_ID: 503 }, // Artisanal
  { Mapping_ID: 1042, Cheese_ID: 620, Attribute_ID: 602 }, // Snacking

  // Kyrgyz Horse Cheese (621)
  { Mapping_ID: 1043, Cheese_ID: 621, Attribute_ID: 103 }, // Semi-Soft
  { Mapping_ID: 1044, Cheese_ID: 621, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 1045, Cheese_ID: 621, Attribute_ID: 203 }, // Tangy
  { Mapping_ID: 1046, Cheese_ID: 621, Attribute_ID: 402 }, // Mild funkiness
  { Mapping_ID: 1047, Cheese_ID: 621, Attribute_ID: 503 }, // Artisanal
  { Mapping_ID: 1048, Cheese_ID: 621, Attribute_ID: 602 }, // Snacking

  // Russian Mare Cheese (622)
  { Mapping_ID: 1049, Cheese_ID: 622, Attribute_ID: 103 }, // Semi-Soft (crumbly)
  { Mapping_ID: 1050, Cheese_ID: 622, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 1051, Cheese_ID: 622, Attribute_ID: 203 }, // Tangy
  { Mapping_ID: 1052, Cheese_ID: 622, Attribute_ID: 206 }, // Salty
  { Mapping_ID: 1053, Cheese_ID: 622, Attribute_ID: 402 }, // Mild funkiness
  { Mapping_ID: 1054, Cheese_ID: 622, Attribute_ID: 503 }, // Artisanal
  { Mapping_ID: 1055, Cheese_ID: 622, Attribute_ID: 602 }, // Snacking

  // Indian Zebu Paneer (623)
  { Mapping_ID: 1056, Cheese_ID: 623, Attribute_ID: 103 }, // Semi-Soft (crumbly)
  { Mapping_ID: 1057, Cheese_ID: 623, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 1058, Cheese_ID: 623, Attribute_ID: 208 }, // Milky
  { Mapping_ID: 1059, Cheese_ID: 623, Attribute_ID: 207 }, // Fresh
  { Mapping_ID: 1060, Cheese_ID: 623, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 1061, Cheese_ID: 623, Attribute_ID: 501 }, // Ubiquitous
  { Mapping_ID: 1062, Cheese_ID: 623, Attribute_ID: 601 }, // Cooking

  // African Zebu Cheese (624)
  { Mapping_ID: 1063, Cheese_ID: 624, Attribute_ID: 102 }, // Soft
  { Mapping_ID: 1064, Cheese_ID: 624, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 1065, Cheese_ID: 624, Attribute_ID: 208 }, // Milky
  { Mapping_ID: 1066, Cheese_ID: 624, Attribute_ID: 207 }, // Fresh
  { Mapping_ID: 1067, Cheese_ID: 624, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 1068, Cheese_ID: 624, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 1069, Cheese_ID: 624, Attribute_ID: 602 }, // Snacking

  // Brazilian Zebu Fresh (625)
  { Mapping_ID: 1070, Cheese_ID: 625, Attribute_ID: 102 }, // Soft
  { Mapping_ID: 1071, Cheese_ID: 625, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 1072, Cheese_ID: 625, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 1073, Cheese_ID: 625, Attribute_ID: 208 }, // Milky
  { Mapping_ID: 1074, Cheese_ID: 625, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 1075, Cheese_ID: 625, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 1076, Cheese_ID: 625, Attribute_ID: 602 }, // Snacking

  // Zebu Halloumi Style (626)
  { Mapping_ID: 1077, Cheese_ID: 626, Attribute_ID: 104 }, // Semi-Hard
  { Mapping_ID: 1078, Cheese_ID: 626, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 1079, Cheese_ID: 626, Attribute_ID: 206 }, // Salty
  { Mapping_ID: 1080, Cheese_ID: 626, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 1081, Cheese_ID: 626, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 1082, Cheese_ID: 626, Attribute_ID: 608 }, // Grilling
  { Mapping_ID: 1083, Cheese_ID: 626, Attribute_ID: 601 }, // Cooking

  // Indian Zebu Khoa (627)
  { Mapping_ID: 1084, Cheese_ID: 627, Attribute_ID: 102 }, // Soft
  { Mapping_ID: 1085, Cheese_ID: 627, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 1086, Cheese_ID: 627, Attribute_ID: 210 }, // Sweet
  { Mapping_ID: 1087, Cheese_ID: 627, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 1088, Cheese_ID: 627, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 1089, Cheese_ID: 627, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 1090, Cheese_ID: 627, Attribute_ID: 609 }, // Baking
  { Mapping_ID: 1091, Cheese_ID: 627, Attribute_ID: 603 }, // Dessert

  // A2 Cheddar (628)
  { Mapping_ID: 1092, Cheese_ID: 628, Attribute_ID: 105 }, // Hard
  { Mapping_ID: 1093, Cheese_ID: 628, Attribute_ID: 302 }, // Melts Well
  { Mapping_ID: 1094, Cheese_ID: 628, Attribute_ID: 209 }, // Sharp
  { Mapping_ID: 1095, Cheese_ID: 628, Attribute_ID: 202 }, // Buttery
  { Mapping_ID: 1096, Cheese_ID: 628, Attribute_ID: 402 }, // Moderate funkiness
  { Mapping_ID: 1097, Cheese_ID: 628, Attribute_ID: 501 }, // Everyday
  { Mapping_ID: 1098, Cheese_ID: 628, Attribute_ID: 602 }, // Snacking

  // A2 Mild Cheddar (629)
  { Mapping_ID: 1099, Cheese_ID: 629, Attribute_ID: 104 }, // Semi-Hard
  { Mapping_ID: 1100, Cheese_ID: 629, Attribute_ID: 302 }, // Melts Well
  { Mapping_ID: 1101, Cheese_ID: 629, Attribute_ID: 208 }, // Milky
  { Mapping_ID: 1102, Cheese_ID: 629, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 1103, Cheese_ID: 629, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 1104, Cheese_ID: 629, Attribute_ID: 501 }, // Everyday
  { Mapping_ID: 1105, Cheese_ID: 629, Attribute_ID: 602 }, // Snacking

  // A2 Sharp Cheddar (630)
  { Mapping_ID: 1106, Cheese_ID: 630, Attribute_ID: 105 }, // Hard
  { Mapping_ID: 1107, Cheese_ID: 630, Attribute_ID: 302 }, // Melts Well
  { Mapping_ID: 1108, Cheese_ID: 630, Attribute_ID: 209 }, // Sharp
  { Mapping_ID: 1109, Cheese_ID: 630, Attribute_ID: 205 }, // Tangy
  { Mapping_ID: 1110, Cheese_ID: 630, Attribute_ID: 403 }, // Bold funkiness
  { Mapping_ID: 1111, Cheese_ID: 630, Attribute_ID: 501 }, // Everyday
  { Mapping_ID: 1112, Cheese_ID: 630, Attribute_ID: 602 }, // Snacking

  // A2 Mozzarella (631)
  { Mapping_ID: 1113, Cheese_ID: 631, Attribute_ID: 102 }, // Soft
  { Mapping_ID: 1114, Cheese_ID: 631, Attribute_ID: 303 }, // Super Stretchy
  { Mapping_ID: 1115, Cheese_ID: 631, Attribute_ID: 208 }, // Milky
  { Mapping_ID: 1116, Cheese_ID: 631, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 1117, Cheese_ID: 631, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 1118, Cheese_ID: 631, Attribute_ID: 501 }, // Everyday
  { Mapping_ID: 1119, Cheese_ID: 631, Attribute_ID: 606 }, // Pizza

  // A2 Monterey Jack (632)
  { Mapping_ID: 1120, Cheese_ID: 632, Attribute_ID: 103 }, // Semi-Soft
  { Mapping_ID: 1121, Cheese_ID: 632, Attribute_ID: 302 }, // Melts Well
  { Mapping_ID: 1122, Cheese_ID: 632, Attribute_ID: 202 }, // Buttery
  { Mapping_ID: 1123, Cheese_ID: 632, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 1124, Cheese_ID: 632, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 1125, Cheese_ID: 632, Attribute_ID: 501 }, // Everyday
  { Mapping_ID: 1126, Cheese_ID: 632, Attribute_ID: 602 }, // Snacking

  // Jersey Cheddar (633)
  { Mapping_ID: 1127, Cheese_ID: 633, Attribute_ID: 105 }, // Hard
  { Mapping_ID: 1128, Cheese_ID: 633, Attribute_ID: 302 }, // Melts Well
  { Mapping_ID: 1129, Cheese_ID: 633, Attribute_ID: 209 }, // Sharp
  { Mapping_ID: 1130, Cheese_ID: 633, Attribute_ID: 202 }, // Buttery
  { Mapping_ID: 1131, Cheese_ID: 633, Attribute_ID: 403 }, // Bold funkiness
  { Mapping_ID: 1132, Cheese_ID: 633, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 1133, Cheese_ID: 633, Attribute_ID: 602 }, // Snacking

  // Jersey Blue (634)
  { Mapping_ID: 1134, Cheese_ID: 634, Attribute_ID: 103 }, // Semi-Soft
  { Mapping_ID: 1135, Cheese_ID: 634, Attribute_ID: 302 }, // Melts Well
  { Mapping_ID: 1136, Cheese_ID: 634, Attribute_ID: 209 }, // Sharp
  { Mapping_ID: 1137, Cheese_ID: 634, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 1138, Cheese_ID: 634, Attribute_ID: 404 }, // Funky funkiness
  { Mapping_ID: 1139, Cheese_ID: 634, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 1140, Cheese_ID: 634, Attribute_ID: 605 }, // Salads

  // Jersey Brie (635)
  { Mapping_ID: 1141, Cheese_ID: 635, Attribute_ID: 102 }, // Soft
  { Mapping_ID: 1142, Cheese_ID: 635, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 1143, Cheese_ID: 635, Attribute_ID: 202 }, // Buttery
  { Mapping_ID: 1144, Cheese_ID: 635, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 1145, Cheese_ID: 635, Attribute_ID: 403 }, // Bold funkiness
  { Mapping_ID: 1146, Cheese_ID: 635, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 1147, Cheese_ID: 635, Attribute_ID: 602 }, // Snacking

  // Guernsey Gold Cheddar (636)
  { Mapping_ID: 1148, Cheese_ID: 636, Attribute_ID: 105 }, // Hard
  { Mapping_ID: 1149, Cheese_ID: 636, Attribute_ID: 302 }, // Melts Well
  { Mapping_ID: 1150, Cheese_ID: 636, Attribute_ID: 209 }, // Sharp
  { Mapping_ID: 1151, Cheese_ID: 636, Attribute_ID: 202 }, // Buttery
  { Mapping_ID: 1152, Cheese_ID: 636, Attribute_ID: 403 }, // Bold funkiness
  { Mapping_ID: 1153, Cheese_ID: 636, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 1154, Cheese_ID: 636, Attribute_ID: 602 }, // Snacking

  // Guernsey Butter Cheese (637)
  { Mapping_ID: 1155, Cheese_ID: 637, Attribute_ID: 104 }, // Semi-Hard
  { Mapping_ID: 1156, Cheese_ID: 637, Attribute_ID: 302 }, // Melts Well
  { Mapping_ID: 1157, Cheese_ID: 637, Attribute_ID: 202 }, // Buttery
  { Mapping_ID: 1158, Cheese_ID: 637, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 1159, Cheese_ID: 637, Attribute_ID: 402 }, // Moderate funkiness
  { Mapping_ID: 1160, Cheese_ID: 637, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 1161, Cheese_ID: 637, Attribute_ID: 602 }, // Snacking

  // A2 Colby (638)
  { Mapping_ID: 1162, Cheese_ID: 638, Attribute_ID: 103 }, // Semi-Soft
  { Mapping_ID: 1163, Cheese_ID: 638, Attribute_ID: 302 }, // Melts Well
  { Mapping_ID: 1164, Cheese_ID: 638, Attribute_ID: 208 }, // Milky
  { Mapping_ID: 1165, Cheese_ID: 638, Attribute_ID: 210 }, // Sweet
  { Mapping_ID: 1166, Cheese_ID: 638, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 1167, Cheese_ID: 638, Attribute_ID: 501 }, // Everyday
  { Mapping_ID: 1168, Cheese_ID: 638, Attribute_ID: 602 }, // Snacking

  // A2 Pepper Jack (639)
  { Mapping_ID: 1169, Cheese_ID: 639, Attribute_ID: 103 }, // Semi-Soft
  { Mapping_ID: 1170, Cheese_ID: 639, Attribute_ID: 302 }, // Melts Well
  { Mapping_ID: 1171, Cheese_ID: 639, Attribute_ID: 211 }, // Spicy
  { Mapping_ID: 1172, Cheese_ID: 639, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 1173, Cheese_ID: 639, Attribute_ID: 402 }, // Moderate funkiness
  { Mapping_ID: 1174, Cheese_ID: 639, Attribute_ID: 501 }, // Everyday
  { Mapping_ID: 1175, Cheese_ID: 639, Attribute_ID: 602 }, // Snacking
  { Mapping_ID: 1218, Cheese_ID: 639, Attribute_ID: 701 }, // Peppers

  // A2 Swiss (640)
  { Mapping_ID: 1176, Cheese_ID: 640, Attribute_ID: 104 }, // Semi-Hard
  { Mapping_ID: 1177, Cheese_ID: 640, Attribute_ID: 302 }, // Melts Well
  { Mapping_ID: 1178, Cheese_ID: 640, Attribute_ID: 203 }, // Nutty
  { Mapping_ID: 1179, Cheese_ID: 640, Attribute_ID: 210 }, // Sweet
  { Mapping_ID: 1180, Cheese_ID: 640, Attribute_ID: 402 }, // Moderate funkiness
  { Mapping_ID: 1181, Cheese_ID: 640, Attribute_ID: 501 }, // Everyday
  { Mapping_ID: 1182, Cheese_ID: 640, Attribute_ID: 602 }, // Snacking

  // A2 Provolone (641)
  { Mapping_ID: 1183, Cheese_ID: 641, Attribute_ID: 104 }, // Semi-Hard
  { Mapping_ID: 1184, Cheese_ID: 641, Attribute_ID: 302 }, // Melts Well
  { Mapping_ID: 1185, Cheese_ID: 641, Attribute_ID: 205 }, // Tangy
  { Mapping_ID: 1186, Cheese_ID: 641, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 1187, Cheese_ID: 641, Attribute_ID: 402 }, // Moderate funkiness
  { Mapping_ID: 1188, Cheese_ID: 641, Attribute_ID: 501 }, // Everyday
  { Mapping_ID: 1189, Cheese_ID: 641, Attribute_ID: 602 }, // Snacking

  // Jersey Farmhouse (642)
  { Mapping_ID: 1190, Cheese_ID: 642, Attribute_ID: 104 }, // Semi-Hard
  { Mapping_ID: 1191, Cheese_ID: 642, Attribute_ID: 302 }, // Melts Well
  { Mapping_ID: 1192, Cheese_ID: 642, Attribute_ID: 202 }, // Buttery
  { Mapping_ID: 1193, Cheese_ID: 642, Attribute_ID: 203 }, // Nutty
  { Mapping_ID: 1194, Cheese_ID: 642, Attribute_ID: 403 }, // Bold funkiness
  { Mapping_ID: 1195, Cheese_ID: 642, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 1196, Cheese_ID: 642, Attribute_ID: 602 }, // Snacking

  // A2 Cream Cheese (643)
  { Mapping_ID: 1197, Cheese_ID: 643, Attribute_ID: 102 }, // Soft
  { Mapping_ID: 1198, Cheese_ID: 643, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 1199, Cheese_ID: 643, Attribute_ID: 208 }, // Milky
  { Mapping_ID: 1200, Cheese_ID: 643, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 1201, Cheese_ID: 643, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 1202, Cheese_ID: 643, Attribute_ID: 501 }, // Everyday
  { Mapping_ID: 1203, Cheese_ID: 643, Attribute_ID: 609 }, // Baking

  // A2 Gouda (644)
  { Mapping_ID: 1204, Cheese_ID: 644, Attribute_ID: 104 }, // Semi-Hard
  { Mapping_ID: 1205, Cheese_ID: 644, Attribute_ID: 302 }, // Melts Well
  { Mapping_ID: 1206, Cheese_ID: 644, Attribute_ID: 202 }, // Buttery
  { Mapping_ID: 1207, Cheese_ID: 644, Attribute_ID: 210 }, // Sweet
  { Mapping_ID: 1208, Cheese_ID: 644, Attribute_ID: 402 }, // Moderate funkiness
  { Mapping_ID: 1209, Cheese_ID: 644, Attribute_ID: 501 }, // Everyday
  { Mapping_ID: 1210, Cheese_ID: 644, Attribute_ID: 602 }, // Snacking

  // Guernsey Soft Cheese (645)
  { Mapping_ID: 1211, Cheese_ID: 645, Attribute_ID: 102 }, // Soft
  { Mapping_ID: 1212, Cheese_ID: 645, Attribute_ID: 301 }, // Non-Melting
  { Mapping_ID: 1213, Cheese_ID: 645, Attribute_ID: 202 }, // Buttery
  { Mapping_ID: 1214, Cheese_ID: 645, Attribute_ID: 214 }, // Creamy
  { Mapping_ID: 1215, Cheese_ID: 645, Attribute_ID: 401 }, // Delicate funkiness
  { Mapping_ID: 1216, Cheese_ID: 645, Attribute_ID: 502 }, // Specialty
  { Mapping_ID: 1217, Cheese_ID: 645, Attribute_ID: 602 }, // Snacking
];
