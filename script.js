// Product Data
const products = [
    { id: 1, name: 'Eames Lounge Chair', brand: 'Vitra', category: 'Furniture', subcategory: 'Chair', color: 'Brown', price: 6495, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600' },
    { id: 2, name: 'LC2 Armchair', brand: 'Cassina', category: 'Furniture', subcategory: 'Chair', color: 'Black', price: 4850, image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600' },
    { id: 3, name: 'Series 7 Chair', brand: 'Fritz Hansen', category: 'Furniture', subcategory: 'Chair', color: 'White', price: 545, image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=600' },
    { id: 4, name: 'Egg Chair', brand: 'Fritz Hansen', category: 'Furniture', subcategory: 'Chair', color: 'Gray', price: 8950, image: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=600' },
    { id: 5, name: 'Wassily Chair', brand: 'Knoll', category: 'Furniture', subcategory: 'Chair', color: 'Black', price: 2790, image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600' },
    { id: 6, name: 'Superleggera Chair', brand: 'Cassina', category: 'Furniture', subcategory: 'Chair', color: 'Beige', price: 895, image: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=600' },
    { id: 7, name: 'Panton Chair', brand: 'Vitra', category: 'Furniture', subcategory: 'Chair', color: 'White', price: 395, image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600' },
    { id: 8, name: 'Cesca Chair', brand: 'Knoll', category: 'Furniture', subcategory: 'Chair', color: 'Brown', price: 1195, image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600' },
    { id: 9, name: 'Tulip Table', brand: 'Knoll', category: 'Furniture', subcategory: 'Table', color: 'White', price: 3250, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600' },
    { id: 10, name: 'LC10 Coffee Table', brand: 'Cassina', category: 'Furniture', subcategory: 'Table', color: 'Black', price: 2890, image: 'https://images.unsplash.com/photo-1554295405-abb8fd54f153?w=600' },
    { id: 11, name: 'Saarinen Dining Table', brand: 'Knoll', category: 'Furniture', subcategory: 'Table', color: 'White', price: 4850, image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600' },
    { id: 12, name: 'Nelson Platform Bench', brand: 'Vitra', category: 'Furniture', subcategory: 'Table', color: 'Brown', price: 1250, image: 'https://images.unsplash.com/photo-1550254478-ead40cc54513?w=600' },
    { id: 13, name: 'Arco Floor Lamp', brand: 'Flos', category: 'Lighting', subcategory: 'Floor Lamp', color: 'White', price: 2850, image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600' },
    { id: 14, name: 'Tolomeo Floor Lamp', brand: 'Artemide', category: 'Lighting', subcategory: 'Floor Lamp', color: 'Gray', price: 745, image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600' },
    { id: 15, name: 'PH5 Pendant', brand: 'Flos', category: 'Lighting', subcategory: 'Pendant', color: 'White', price: 995, image: 'https://images.unsplash.com/photo-1565518534077-d0c2d2f50a3a?w=600' },
    { id: 16, name: 'Akari Light Sculpture', brand: 'Vitra', category: 'Lighting', subcategory: 'Table Lamp', color: 'White', price: 350, image: 'https://images.unsplash.com/photo-1526285759904-71d1170ed2ac?w=600' },
    { id: 17, name: 'Maralunga Sofa', brand: 'Cassina', category: 'Furniture', subcategory: 'Sofa', color: 'Gray', price: 8950, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600' },
    { id: 18, name: 'Camaleonda Sofa', brand: 'B&B Italia', category: 'Furniture', subcategory: 'Sofa', color: 'Beige', price: 12500, image: 'https://images.unsplash.com/photo-1550254478-ead40cc54513?w=600' },
];

const brandData = {
    'Cassina': {
        name: 'Cassina',
        country: 'Italy',
        founded: '1927',
        description: 'Founded in Meda, Italy, Cassina represents the pinnacle of Italian design excellence. From collaboration with modernist masters to contemporary innovations, the brand has shaped the evolution of furniture design for nearly a century.',
        philosophy: 'Cassina embodies a perfect marriage of artisanal craftsmanship and industrial production. Each piece is a testament to meticulous attention to detail, honoring both the designer\'s vision and the material\'s inherent qualities.',
        characteristics: [
            'Collaboration with legendary designers including Le Corbusier, Charlotte Perriand, and Gio Ponti',
            'Master craftsmanship combining traditional techniques with modern technology',
            'Iconic modernist furniture reproduced with absolute fidelity',
            'Premium materials: solid wood, leather, marble, and fine textiles'
        ]
    },
    'Vitra': {
        name: 'Vitra',
        country: 'Switzerland',
        founded: '1950',
        description: 'Vitra is a Swiss company dedicated to improving the quality of homes, offices and public spaces through the power of design. Working with leading designers, Vitra creates innovative products and concepts.',
        philosophy: 'Design is not about the object, but about the people who use it. Vitra believes in creating furniture that enhances everyday life through thoughtful design, superior quality, and sustainability.',
        characteristics: [
            'Collaboration with Charles and Ray Eames, Verner Panton, and contemporary designers',
            'Campus architecture by Frank Gehry, Zaha Hadid, and Tadao Ando',
            'Sustainable production methods and long-lasting designs',
            'Focus on both residential and contract furniture'
        ]
    },
    'Fritz Hansen': {
        name: 'Fritz Hansen',
        country: 'Denmark',
        founded: '1872',
        description: 'For over 145 years, Fritz Hansen has been synonymous with timeless Danish design. The company is renowned for its iconic chairs and commitment to exceptional craftsmanship.',
        philosophy: 'Creating furniture with soul requires respect for materials, mastery of technique, and a dedication to timeless aesthetics. Each piece should serve both function and beauty for generations.',
        characteristics: [
            'Iconic designs by Arne Jacobsen including the Egg, Swan, and Series 7 chairs',
            'Danish craftsmanship tradition combined with modern production',
            'Commitment to organic shapes and ergonomic comfort',
            'Finest materials including premium leather and sustainable wood'
        ]
    }
};

const referenceData = {
    'Classical': {
        name: 'Classical',
        category: 'Classical',
        period: 'Antiquity — 19th Century',
        description: 'Classical interiors emphasize symmetry, proportion, architectural order, and refined ornamentation.',
        origins: 'Rooted in Greek and Roman architecture, classical interiors use columns, mouldings, balanced layouts, and formal decorative language.',
        materials: ['Marble', 'Stone', 'Walnut', 'Gilded metal', 'Silk'],
        colorPalette: ['Ivory', 'Cream', 'Gold', 'Stone gray', 'Deep wood'],
        characteristics: [
            'Symmetrical room composition',
            'Architectural moulding and columns',
            'Formal furniture arrangement',
            'Refined decorative detailing',
            'Balanced proportions and visual hierarchy'
        ],
        mood: 'Formal, timeless, refined, and architectural',
        backgroundColor: '#f5f1ea',
        fontFamily: 'Georgia, serif',
        letterSpacing: '0.08em',
        images: [
            'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800',
            'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800',
            'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800',
            'https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=800'
        ]
    },

    'Art Nouveau': {
        name: 'Art Nouveau',
        category: 'Classical',
        period: '1890s — 1910s',
        description: 'Art Nouveau interiors are known for organic curves, floral ornamentation, and handcrafted decorative unity.',
        origins: 'Developed across Europe at the end of the 19th century as a reaction against historic revival styles and industrial repetition.',
        materials: ['Stained glass', 'Carved wood', 'Bronze', 'Ceramic tile', 'Wrought iron'],
        colorPalette: ['Sage', 'Amber', 'Cream', 'Soft brown', 'Muted green'],
        characteristics: [
            'Flowing organic lines',
            'Botanical and floral motifs',
            'Decorative stained glass',
            'Curved furniture silhouettes',
            'Handcrafted surface ornament'
        ],
        mood: 'Romantic, organic, decorative, and artistic',
        backgroundColor: '#f4efe6',
        fontFamily: 'Georgia, serif',
        letterSpacing: '0.06em',
        images: [
            'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800',
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800',
            'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800',
            'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800',
            'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800',
            'https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=800'
        ]
    },

    'Art Deco': {
        name: 'Art Deco',
        category: 'Classical',
        period: '1920s — 1940s',
        description: 'Art Deco represents glamour, luxury, and geometric sophistication.',
        origins: 'Emerging in 1920s Paris, Art Deco celebrated progress, luxury, and the machine age through elegant geometric design.',
        materials: ['Marble', 'Brass', 'Chrome', 'Velvet', 'Lacquer'],
        colorPalette: ['Black', 'Gold', 'Emerald', 'Navy', 'Cream'],
        characteristics: [
            'Bold geometry',
            'Luxury materials',
            'Decorative symmetry',
            'Metallic accents',
            'High contrast surfaces'
        ],
        mood: 'Elegant, dramatic, glamorous, and theatrical',
        backgroundColor: '#1a1a1a',
        fontFamily: 'Georgia, serif',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        isDark: true,
        images: [
            'https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=800',
            'https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?w=800',
            'https://images.unsplash.com/photo-1582037928769-181f2644ecb7?w=800',
            'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800',
            'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=800',
            'https://images.unsplash.com/photo-1578898886135-c63ba58c3f52?w=800'
        ]
    },

    'Victorian': {
        name: 'Victorian',
        category: 'Classical',
        period: '1837 — 1901',
        description: 'Victorian interiors are layered, ornate, richly textured, and expressive of historical eclecticism.',
        origins: 'Developed during Queen Victoria’s reign, combining Gothic, Rococo, classical, and exotic influences into dense decorative rooms.',
        materials: ['Dark wood', 'Velvet', 'Patterned wallpaper', 'Brass', 'Ceramic'],
        colorPalette: ['Burgundy', 'Forest green', 'Dark brown', 'Cream', 'Gold'],
        characteristics: [
            'Layered patterns and textiles',
            'Dark carved wood furniture',
            'Decorative wallpaper',
            'Ornate lighting and accessories',
            'Collected and eclectic atmosphere'
        ],
        mood: 'Rich, historical, ornate, and intimate',
        backgroundColor: '#2b211d',
        fontFamily: 'Georgia, serif',
        letterSpacing: '0.05em',
        isDark: true,
        images: [
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800',
            'https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=800',
            'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800',
            'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
            'https://images.unsplash.com/photo-1582037928769-181f2644ecb7?w=800'
        ]
    },

    'Modern': {
        name: 'Modern',
        category: 'Contemporary',
        period: '1920s — Present',
        description: 'Modern design embraces simplicity, clean lines, and a rejection of ornamentation. It emphasizes function over form, creating spaces that are both beautiful and practical.',
        origins: 'Born from the Bauhaus movement and International Style, modern design emerged as a response to industrialization and mass production. Pioneers like Le Corbusier, Mies van der Rohe, and Walter Gropius shaped its fundamental principles.',
        materials: ['Steel', 'Glass', 'Concrete', 'Leather', 'Natural wood'],
        colorPalette: ['White', 'Black', 'Gray', 'Beige', 'Primary colors as accents'],
        characteristics: [
            'Clean, geometric lines and minimal ornamentation',
            'Open floor plans with emphasis on space and light',
            'Form follows function philosophy',
            'Integration of indoor and outdoor spaces',
            'Industrial materials and exposed structural elements',
            'Neutral color palette with bold accent colors'
        ],
        mood: 'Rational, clean, uncluttered, and serene',
        backgroundColor: '#fafafa',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        letterSpacing: '0.05em',
        images: [
            'https://images.unsplash.com/photo-1494526585095-c41746248156?w=800',
            'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800',
            'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800',
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
            'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800',
            'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800'
        ]
    },

    'Mid-Century Modern': {
        name: 'Mid-Century Modern',
        category: 'Contemporary',
        period: '1940s — 1960s',
        description: 'Mid-Century Modern interiors combine clean lines, warm woods, sculptural furniture, and optimistic postwar design.',
        origins: 'Developed after World War II through designers such as Charles and Ray Eames, Eero Saarinen, Florence Knoll, and Arne Jacobsen.',
        materials: ['Teak', 'Walnut', 'Leather', 'Fiberglass', 'Steel'],
        colorPalette: ['Warm wood', 'Olive', 'Mustard', 'Cream', 'Burnt orange'],
        characteristics: [
            'Low-profile furniture',
            'Organic and geometric forms',
            'Warm wood tones',
            'Open living spaces',
            'Iconic sculptural chairs and tables'
        ],
        mood: 'Warm, optimistic, graphic, and timeless',
        backgroundColor: '#f4efe6',
        fontFamily: 'system-ui, sans-serif',
        letterSpacing: '0.06em',
        images: [
            'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800',
            'https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=800',
            'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800',
            'https://images.unsplash.com/photo-1503602642458-232111445657?w=800',
            'https://images.unsplash.com/photo-1550254478-ead40cc54513?w=800',
            'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800'
        ]
    },

    'Minimal': {
        name: 'Minimal',
        category: 'Contemporary',
        period: '1960s — Present',
        description: 'Minimal interiors reduce space to essential forms, quiet materials, and calm spatial clarity.',
        origins: 'Influenced by modernism, Japanese spatial philosophy, and minimalist art, this style values restraint and intentional emptiness.',
        materials: ['Plaster', 'Concrete', 'Oak', 'Linen', 'Glass'],
        colorPalette: ['White', 'Warm gray', 'Stone', 'Charcoal', 'Natural wood'],
        characteristics: [
            'Very limited color palette',
            'Strong negative space',
            'Hidden storage and clean surfaces',
            'Simple furniture silhouettes',
            'Focus on light, texture, and proportion'
        ],
        mood: 'Quiet, restrained, spacious, and precise',
        backgroundColor: '#fbfbfa',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        images: [
            'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
            'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800',
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800',
            'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800'
        ]
    },

    'Bauhaus': {
        name: 'Bauhaus',
        category: 'Contemporary',
        period: '1919 — 1933',
        description: 'Bauhaus united art, craft, and technology. It emphasized functional design, geometric forms, and the honest use of materials.',
        origins: 'Founded by Walter Gropius in Weimar, Germany, the Bauhaus school revolutionized design education and practice. Its influence continues to shape contemporary design.',
        materials: ['Tubular steel', 'Glass', 'Plywood', 'Canvas', 'Leather'],
        colorPalette: ['Red', 'Blue', 'Yellow', 'Black', 'White'],
        characteristics: [
            'Geometric forms and primary shapes',
            'Primary colors combined with black and white',
            'Industrial materials and production methods',
            'Unity of form and function',
            'Experimental typography and graphics',
            'Integration of art, architecture, and design'
        ],
        mood: 'Rational, experimental, revolutionary, and bold',
        backgroundColor: '#f0f0f0',
        fontFamily: 'system-ui, sans-serif',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        images: [
            'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800',
            'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800',
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
            'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800',
            'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800'
        ]
    },

    'Scandinavian': {
        name: 'Scandinavian',
        category: 'Warm',
        period: '1950s — Present',
        description: 'Scandinavian design combines functionality with warmth, creating cozy yet elegant spaces. It celebrates natural materials, light, and the connection to nature.',
        origins: 'Emerging from Nordic countries in the mid-20th century, Scandinavian design was shaped by Alvar Aalto, Arne Jacobsen, and Hans Wegner. It balances modernist principles with humanistic warmth.',
        materials: ['Light wood', 'Wool', 'Linen', 'Leather', 'Natural fibers'],
        colorPalette: ['White', 'Beige', 'Light gray', 'Soft blues', 'Warm woods'],
        characteristics: [
            'Light, natural wood tones and textures',
            'Emphasis on natural light and white walls',
            'Cozy textiles and layered comfort',
            'Clean lines with organic forms',
            'Functional beauty and everyday elegance',
            'Connection to nature and seasonal changes'
        ],
        mood: 'Warm, inviting, calm, and hygge',
        backgroundColor: '#f7f6f4',
        fontFamily: 'Georgia, serif',
        letterSpacing: '0.02em',
        images: [
            'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800',
            'https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=800',
            'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=800',
            'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800',
            'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=800'
        ]
    },

    'Natural': {
        name: 'Natural',
        category: 'Warm',
        period: 'Contemporary',
        description: 'Natural interiors prioritize organic materials, earthy color palettes, tactile surfaces, and a close relationship to nature.',
        origins: 'Rooted in biophilic design, craft traditions, and ecological awareness, natural interiors seek calm through material honesty.',
        materials: ['Wood', 'Stone', 'Rattan', 'Linen', 'Clay'],
        colorPalette: ['Sand', 'Cream', 'Terracotta', 'Olive', 'Warm brown'],
        characteristics: [
            'Organic material palette',
            'Earth-inspired color scheme',
            'Soft daylight and plants',
            'Handmade textures',
            'Relaxed and grounded atmosphere'
        ],
        mood: 'Grounded, calm, tactile, and organic',
        backgroundColor: '#f3eee6',
        fontFamily: 'Georgia, serif',
        letterSpacing: '0.04em',
        images: [
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800',
            'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800',
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800',
            'https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=800',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
            'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=800'
        ]
    },

    'Rustic': {
        name: 'Rustic',
        category: 'Warm',
        period: 'Traditional — Present',
        description: 'Rustic interiors emphasize weathered materials, handmade character, and a warm rural atmosphere.',
        origins: 'Derived from rural homes, cabins, farmhouses, and vernacular building traditions where utility and natural aging shape the space.',
        materials: ['Reclaimed wood', 'Stone', 'Iron', 'Wool', 'Leather'],
        colorPalette: ['Brown', 'Taupe', 'Cream', 'Rust', 'Charcoal'],
        characteristics: [
            'Rough-hewn wood and stone',
            'Warm, earthy palette',
            'Visible texture and patina',
            'Handmade or antique objects',
            'Comfortable and informal arrangement'
        ],
        mood: 'Warm, grounded, aged, and comfortable',
        backgroundColor: '#efe8dc',
        fontFamily: 'Georgia, serif',
        letterSpacing: '0.04em',
        images: [
            'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800',
            'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800',
            'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800',
            'https://images.unsplash.com/photo-1494526585095-c41746248156?w=800'
        ]
    },

    'Vintage': {
        name: 'Vintage',
        category: 'Warm',
        period: '20th Century Inspired',
        description: 'Vintage interiors collect design language from past decades, using aged objects, nostalgic colors, and eclectic layering.',
        origins: 'Built from flea-market finds, archival furniture, historical references, and personal collections rather than one strict period.',
        materials: ['Patinated wood', 'Chrome', 'Velvet', 'Ceramic', 'Patterned textile'],
        colorPalette: ['Mustard', 'Brown', 'Cream', 'Olive', 'Dusty rose'],
        characteristics: [
            'Collected furniture and objects',
            'Layered eras and patterns',
            'Warm nostalgic palette',
            'Aged textures and patina',
            'Decorative personality'
        ],
        mood: 'Nostalgic, layered, personal, and warm',
        backgroundColor: '#f1e8dc',
        fontFamily: 'Georgia, serif',
        letterSpacing: '0.07em',
        images: [
            'https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=800',
            'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800',
            'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800',
            'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800',
            'https://images.unsplash.com/photo-1503602642458-232111445657?w=800',
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800'
        ]
    },

    'Industrial': {
        name: 'Industrial',
        category: 'Conceptual',
        period: '2000s — Present',
        description: 'Industrial design celebrates raw, unfinished aesthetics. Exposed brick, metal, and concrete create spaces that feel authentic, urban, and full of character.',
        origins: 'Inspired by converted warehouses and factory spaces, industrial design emerged from urban loft living. It honors the building\'s history while creating contemporary living spaces.',
        materials: ['Exposed brick', 'Metal', 'Concrete', 'Reclaimed wood', 'Iron'],
        colorPalette: ['Gray', 'Black', 'Brown', 'Rust', 'Charcoal'],
        characteristics: [
            'Exposed structural elements and utilities',
            'Raw, unfinished materials and surfaces',
            'Metal fixtures and hardware',
            'Open, loft-like spaces with high ceilings',
            'Vintage or reclaimed furniture pieces',
            'Edison bulbs and utilitarian lighting'
        ],
        mood: 'Urban, edgy, authentic, and bold',
        backgroundColor: '#2a2a2a',
        fontFamily: 'ui-monospace, monospace',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        isDark: true,
        images: [
            'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800',
            'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800',
            'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800',
            'https://images.unsplash.com/photo-1565183997392-2f8d2357d72c?w=800',
            'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800',
            'https://images.unsplash.com/photo-1565183997392-2f8d2357d72c?w=800'
        ]
    },

    'Newtro': {
        name: 'Newtro',
        category: 'Conceptual',
        period: '2010s — Present',
        description: 'Newtro combines retro nostalgia with contemporary polish, reinterpreting old visual languages through modern styling.',
        origins: 'Popularized through Korean design culture, Newtro revives past forms, colors, and graphics with updated materials and digital-era sensibility.',
        materials: ['Chrome', 'Plastic', 'Lacquer', 'Glass block', 'Patterned fabric'],
        colorPalette: ['Cream', 'Orange', 'Brown', 'Mint', 'Black'],
        characteristics: [
            'Retro silhouettes with modern finish',
            'Graphic colors and nostalgic forms',
            'Mix of old and new objects',
            'Playful furniture and lighting',
            'Editorial, pop-cultural feeling'
        ],
        mood: 'Nostalgic, playful, graphic, and contemporary',
        backgroundColor: '#f5eadf',
        fontFamily: 'system-ui, sans-serif',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        images: [
            'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800',
            'https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=800',
            'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800',
            'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800',
            'https://images.unsplash.com/photo-1503602642458-232111445657?w=800',
            'https://images.unsplash.com/photo-1550254478-ead40cc54513?w=800'
        ]
    },

    'Bohemian': {
        name: 'Bohemian',
        category: 'Conceptual',
        period: '1960s — Present',
        description: 'Bohemian interiors are eclectic, expressive, layered, and globally inspired, often mixing color, plants, textiles, and handmade objects.',
        origins: 'Rooted in artistic and nomadic lifestyles, bohemian interiors resist strict rules and favor personal collections and relaxed comfort.',
        materials: ['Rattan', 'Macramé', 'Wool', 'Linen', 'Wicker'],
        colorPalette: ['Terracotta', 'Cream', 'Olive', 'Indigo', 'Warm brown'],
        characteristics: [
            'Layered textiles and rugs',
            'Plants and natural fibers',
            'Eclectic global objects',
            'Low seating and relaxed layouts',
            'Warm color and handmade detail'
        ],
        mood: 'Free-spirited, layered, warm, and personal',
        backgroundColor: '#f2e6d8',
        fontFamily: 'Georgia, serif',
        letterSpacing: '0.05em',
        images: [
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800',
            'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800',
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800',
            'https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=800',
            'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=800',
            'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800'
        ]
    },

    'Japandi': {
        name: 'Japandi',
        category: 'Conceptual',
        period: '2010s — Present',
        description: 'Japandi fuses Japanese minimalism with Scandinavian warmth. It creates serene, functional spaces that honor craftsmanship and natural beauty.',
        origins: 'A contemporary fusion of Japanese wabi-sabi philosophy and Scandinavian hygge, Japandi emerged in the 2010s as a refined, sustainable design approach.',
        materials: ['Light wood', 'Bamboo', 'Linen', 'Rattan', 'Stone'],
        colorPalette: ['Cream', 'Beige', 'Charcoal', 'Soft green', 'Warm gray'],
        characteristics: [
            'Clean lines with organic warmth',
            'Natural, muted color palette',
            'Handcrafted and artisanal elements',
            'Functional minimalism with comfort',
            'Low-profile furniture and floor seating',
            'Balance, harmony, and sustainability'
        ],
        mood: 'Serene, balanced, warm, and mindful',
        backgroundColor: '#f8f7f4',
        fontFamily: 'system-ui, sans-serif',
        letterSpacing: '0.08em',
        images: [
            'https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=800',
            'https://images.unsplash.com/photo-1617104678098-de229db51175?w=800',
            'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800',
            'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800',
            'https://images.unsplash.com/photo-1615875474908-f403811c90b0?w=800',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800'
        ]
    }
};

let currentFilters = {
    search: '',
    color: 'All',
    maxPrice: 10000,
    category: 'Furniture',
    subcategory: 'Chair'
};

function navigateToPage(pageName, data = {}) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    const targetPage = document.getElementById(pageName + '-page');
    if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo(0, 0);

        if (pageName === 'product') {
            currentFilters.category = data.category || 'Furniture';
            currentFilters.subcategory = data.subcategory || 'Chair';
            renderProductPage();
        } else if (pageName === 'brand') {
            const brandName = data.brand || 'Cassina';
            renderBrandPage(brandName);
        } else if (pageName === 'reference') {
            const styleName = data.style || 'Modern';
            renderReferencePage(styleName);
        }
    }
}

function renderProductPage() {
    const categoryTitle = document.getElementById('category-title');
    if (categoryTitle) {
        categoryTitle.textContent = currentFilters.subcategory;
    }

    filterAndRenderProducts();
}

function filterAndRenderProducts() {
    let filtered = products.filter(product => {
        if (product.category !== currentFilters.category || product.subcategory !== currentFilters.subcategory) {
            return false;
        }

        if (currentFilters.search && !product.name.toLowerCase().includes(currentFilters.search.toLowerCase())) {
            return false;
        }

        if (currentFilters.color !== 'All' && product.color !== currentFilters.color) {
            return false;
        }

        if (product.price > currentFilters.maxPrice) {
            return false;
        }

        return true;
    });

    renderProducts(filtered);
}

function renderProducts(filteredProducts) {
    const productGrid = document.getElementById('product-grid');
    const productCount = document.getElementById('product-count');

    if (!productGrid) return;

    productCount.textContent = `${filteredProducts.length} ${filteredProducts.length === 1 ? 'Product' : 'Products'}`;

    if (filteredProducts.length === 0) {
        productGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 4rem; opacity: 0.4;">No products found</div>';
        return;
    }

    productGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-details">
                    <span class="product-color">${product.color}</span>
                    <span class="product-price">$${product.price.toLocaleString()}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function renderBrandPage(brandName) {
    const brand = brandData[brandName];
    if (!brand) {
        const firstBrandName = Object.keys(brandData)[0];
        if (firstBrandName) return renderBrandPage(firstBrandName);
        return;
    }

    const brandProducts = products.filter(p => p.brand === brandName);

    const content = `
        <div class="brand-hero">
            <p class="brand-meta">${brand.country} — Est. ${brand.founded}</p>
            <h1 class="brand-title">${brand.name}</h1>
        </div>

        <div class="brand-description-section">
            <div class="brand-grid-layout">
                <div class="brand-column">
                    <div>
                        <h2 class="brand-section-title">Heritage</h2>
                        <p class="brand-text">${brand.description}</p>
                    </div>
                    <div>
                        <h2 class="brand-section-title">Philosophy</h2>
                        <p class="brand-text">${brand.philosophy}</p>
                    </div>
                </div>
                <div class="brand-column">
                    <div>
                        <h2 class="brand-section-title">Characteristics</h2>
                        <ul class="brand-characteristics">
                            ${brand.characteristics.map(char => `<li>${char}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="brand-divider">
            <div class="brand-divider-line"></div>
        </div>

        <div class="brand-products">
            <h2 class="brand-products-title">Collection — ${brandProducts.length} ${brandProducts.length === 1 ? 'Piece' : 'Pieces'}</h2>
            ${brandProducts.length === 0 ? 
                '<div style="text-align: center; padding: 4rem; opacity: 0.4;">No products available</div>' :
                `<div class="product-grid">
                    ${brandProducts.map(product => `
                        <div class="product-card">
                            <div class="product-image">
                                <img src="${product.image}" alt="${product.name}" loading="lazy">
                            </div>
                            <div class="product-info">
                                <div class="product-brand">${product.brand}</div>
                                <div class="product-name">${product.name}</div>
                                <div class="product-details">
                                    <span class="product-color">${product.color}</span>
                                    <span class="product-price">$${product.price.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>`
            }
        </div>
    `;

    const brandContent = document.getElementById('brand-content');
    if (brandContent) {
        brandContent.innerHTML = content;
    }
}

function renderReferencePage(styleName) {
    const style = referenceData[styleName];

    if (!style) {
        const firstStyleName = Object.keys(referenceData)[0];
        if (firstStyleName) return renderReferencePage(firstStyleName);
        return;
    }

    const referenceImages = style.images || [];

    const textColor = style.isDark ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)';
    const subtextColor = style.isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)';
    const borderColor = style.isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)';

    const content = `
        <div class="reference-hero">
            <p class="reference-meta" style="color: ${subtextColor}">${style.category} — ${style.period}</p>
            <h1 class="reference-title" style="font-family: ${style.fontFamily}; letter-spacing: ${style.letterSpacing}; ${style.textTransform ? 'text-transform: ' + style.textTransform + ';' : ''} color: ${textColor}">${style.name}</h1>
            <p class="reference-description" style="color: ${subtextColor}">${style.description}</p>
        </div>

        <div class="reference-details">
            <div class="reference-grid-layout">
                <div>
                    <div class="reference-section">
                        <h2 class="reference-section-title" style="color: ${subtextColor}">Origins & Context</h2>
                        <p class="reference-text" style="color: ${subtextColor}">${style.origins}</p>
                    </div>

                    <div class="reference-section">
                        <h2 class="reference-section-title" style="color: ${subtextColor}">Materials</h2>
                        <div class="reference-tags">
                            ${style.materials.map(material => `
                                <span class="reference-tag" style="border-color: ${borderColor}; color: ${subtextColor}">${material}</span>
                            `).join('')}
                        </div>
                    </div>

                    <div class="reference-section">
                        <h2 class="reference-section-title" style="color: ${subtextColor}">Color Palette</h2>
                        <div class="reference-tags">
                            ${style.colorPalette.map(color => `
                                <span class="reference-tag" style="border-color: ${borderColor}; color: ${subtextColor}">${color}</span>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <div>
                    <div class="reference-section">
                        <h2 class="reference-section-title" style="color: ${subtextColor}">Characteristics</h2>
                        <ul class="reference-characteristics" style="color: ${subtextColor}">
                            ${style.characteristics.map(char => `<li>${char}</li>`).join('')}
                        </ul>
                    </div>

                    <div class="reference-mood" style="border-color: ${borderColor}">
                        <h3 class="reference-section-title" style="color: ${subtextColor}">Mood</h3>
                        <p class="reference-mood-text" style="color: ${textColor}">${style.mood}</p>
                    </div>
                </div>
            </div>

            <div class="reference-divider">
                <div class="reference-divider-line" style="background: ${borderColor}"></div>
            </div>

            <div class="reference-archive">
                <h2 class="reference-archive-title" style="color: ${subtextColor}">Visual Reference Archive</h2>
                <div class="reference-image-grid">
                    ${referenceImages.map((img, index) => `
                        <div class="reference-image">
                            <img src="${img}" alt="${style.name} reference ${index + 1}" loading="lazy">
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    const referenceContent = document.getElementById('reference-content');
    const referencePage = document.getElementById('reference-page');

    if (referenceContent && referencePage) {
        referenceContent.innerHTML = content;
        referenceContent.style.backgroundColor = style.backgroundColor;

        if (style.isDark) {
            if (style.backgroundColor === '#2a2a2a') {
                referenceContent.className = 'reference-content industrial-theme';
            } else {
                referenceContent.className = 'reference-content dark-theme';
            }
        } else {
            referenceContent.className = 'reference-content';
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('[data-page]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const page = this.getAttribute('data-page');

            if (page === 'product') {
                navigateToPage('product', {
                    category: this.getAttribute('data-category'),
                    subcategory: this.getAttribute('data-subcategory')
                });
            } else if (page === 'brand') {
                navigateToPage('brand', {
                    brand: this.getAttribute('data-brand')
                });
            } else if (page === 'reference') {
                navigateToPage('reference', {
                    style: this.getAttribute('data-style')
                });
            } else {
                navigateToPage(page);
            }
        });
    });

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            currentFilters.search = e.target.value;
            filterAndRenderProducts();
        });
    }

    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilters.color = this.getAttribute('data-color');
            filterAndRenderProducts();
        });
    });

    const priceSlider = document.getElementById('price-slider');
    const maxPriceLabel = document.getElementById('max-price');
    if (priceSlider && maxPriceLabel) {
        priceSlider.addEventListener('input', function(e) {
            const value = parseInt(e.target.value);
            currentFilters.maxPrice = value;
            maxPriceLabel.textContent = value >= 10000 ? '$10,000+' : `$${value.toLocaleString()}`;
            filterAndRenderProducts();
        });
    }

    const resetBtn = document.getElementById('reset-filters');
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            currentFilters.search = '';
            currentFilters.color = 'All';
            currentFilters.maxPrice = 10000;

            if (searchInput) searchInput.value = '';
            document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));

            const allColorButton = document.querySelector('.color-btn[data-color="All"]');
            if (allColorButton) allColorButton.classList.add('active');

            if (priceSlider) priceSlider.value = 10000;
            if (maxPriceLabel) maxPriceLabel.textContent = '$10,000+';

            filterAndRenderProducts();
        });
    }

    document.querySelectorAll('.has-dropdown').forEach(item => {
        let timeoutId;

        item.addEventListener('mouseenter', function() {
            clearTimeout(timeoutId);
        });

        item.addEventListener('mouseleave', function() {
            timeoutId = setTimeout(() => {}, 100);
        });

        const dropdown = item.querySelector('.dropdown');
        if (dropdown) {
            dropdown.addEventListener('mouseenter', function() {
                clearTimeout(timeoutId);
            });

            dropdown.addEventListener('mouseleave', function() {
                timeoutId = setTimeout(() => {}, 100);
            });
        }
    });

    navigateToPage('home');
});