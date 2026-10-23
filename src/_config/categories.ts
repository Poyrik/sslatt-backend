// Lawful software marketplace categories.
// Prohibited on this marketplace (see terms): malware, exploits sold for attacks,
// pirated or cracked software, stolen data/accounts, fraud tools, and any other
// illegal goods or services.
const adCategories = [
    {
        name: "Software",
        categories: [
            {
                id: "software", name: "Software",
                subcategories: [
                    { id: "software-apps", name: "Apps & Utilities", },
                    { id: "software-dev-tools", name: "Developer Tools", },
                    { id: "software-security-privacy", name: "Privacy & Security Tools", },
                    { id: "software-scripts-templates", name: "Scripts & Templates", },
                    { id: "software-games", name: "Games", },
                    { id: "software-other", name: "Other Software", },
                ]
            },
            {
                id: "digital", name: "Digital Products",
                subcategories: [
                    { id: "digital-ebooks", name: "E-Books & Guides", },
                    { id: "digital-courses", name: "Courses & Tutorials", },
                    { id: "digital-design-assets", name: "Design Assets", },
                    { id: "digital-other", name: "Other Digital Products", },
                ]
            },
        ]
    }
];

export default adCategories;
