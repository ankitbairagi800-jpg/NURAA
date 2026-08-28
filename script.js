const products=[
['tan','NURAA De-Tan Bathing Bar','Body Soap','Kojic Acid 1% · Lactic Acid · Saffron Extract'],
['tan','NURAA Exfoliating Lactic Body Wash','Body Wash','Lactic Acid 3% · Papaya Extract · Orange Peel'],
['tan','NURAA Bright Reveal Face Cleanser','Face Wash','Alpha Arbutin · Saffron · Goat Milk'],
['tan','NURAA De-Tan UV Shield SPF 50 PA++++','Sunscreen','Niacinamide 2% · Licorice Extract'],
['tan','NURAA 2% Alpha Arbutin Serum','Face Serum','2% Alpha Arbutin Serum · Kojic Acid 1% · Saffron Oil'],

['blackheads','NURAA Charcoal Detox Soap','Body Soap','Activated Charcoal 3% · Salicylic Acid 1% · Neem'],
['blackheads','NURAA Acne-Control Body Wash','Body Wash','Salicylic Acid 1% · Tea Tree Oil · Aloe Vera'],
['blackheads','NURAA Deep Clean BHA Cleanser','Face Wash','Salicylic Acid 2% · Tea Tree · Neem Extract'],
['blackheads','NURAA Matte Oil-Control Sunscreen SPF 50','Sunscreen','Zinc PCA · Green Tea'],
['blackheads','NURAA 2% BHA Acne Serum','Face Serum','Salicylic Acid 2% · Zinc PCA · Tea Tree'],

['whiteheads','NURAA Green Clay Texturizing Soap','Body Soap','French Green Clay · Tulsi · Aloe Vera'],
['whiteheads','NURAA Smooth Skin Kaolin Wash','Body Wash','Kaolin Clay · Glycolic Acid 1% · Basil Extract'],
['whiteheads','NURAA Whitehead Eraser Face Wash','Face Wash','Green Clay · Centella (Cica) · Tea Tree'],
['whiteheads','NURAA Ultra-Light Fluid Sunscreen SPF 50','Sunscreen','Centella · Aloe'],
['whiteheads','NURAA 10% Niacinamide Clarifying Serum','Face Serum','Zinc · Centella (Cica)'],

['fragrance','NURAA Velvet Rose & Shea Soap','Body Soap','Rose Absolute · Jasmine Oil · Shea Butter'],
['fragrance','NURAA Sandalwood & Lavender Shower Gel','Body Wash','Mysore Sandalwood Oil · Lavender · Almond Oil'],
['fragrance','NURAA Soothing Chamomile Cleanser','Face Wash','Chamomile Oil · Rosewater · Aloe Vera'],
['fragrance','NURAA Dewy Vanilla Glow Sunscreen SPF 50','Sunscreen','Vanilla Pod Extract · Vitamin E'],
['fragrance','NURAA Squalane & Neroli Glow Drops','Face Serum','Pure Squalane · Neroli Oil · Rosehip Oil'],

['glow','NURAA Golden Saffron Glow Bar','Body Soap','Saffron Extract · Sandalwood Oil · Goat Milk'],
['glow','NURAA Vitamin C Radiance Body Wash','Body Wash','Vitamin C 1% · Saffron · Sandalwood'],
['glow','NURAA Saffron & Honey Face Cleanser','Face Wash','Saffron Extract · Honey · Vitamin C'],
['glow','NURAA Vitamin C Dewy Sunscreen SPF 50','Sunscreen','Ethyl Ascorbic Acid · Saffron'],
['glow','NURAA 10% Vitamin C Radiance Serum','Face Serum','Niacinamide 2% · Saffron'],

['allskin','NURAA Castile Olive Soap','Body Soap','72% Olive Oil · Pure Glycerin · Aloe Vera'],
['allskin','NURAA Oatmeal Soothing Body Wash','Body Wash','Colloidal Oatmeal · Shea Butter · Chamomile'],
['allskin','NURAA Centella Gentle Cleanser','Face Wash','Centella (Cica) · Aloe Vera · Hyaluronic Acid'],
['allskin','NURAA Hybrid Mineral Sunscreen SPF 50','Sunscreen','Zinc Oxide · Titanium Dioxide · Ceramides'],
['allskin','NURAA 2% Hyaluronic Acid Hydration Serum','Face Serum','Ceramides · Pro-Vitamin B5']
];

// Map clean file names to each of the 30 products with smart fallback for catalog rendering
function getProductFileName(name, type, category) {
    // Check specific hero products
    if (name === "NURAA De-Tan Bathing Bar" || name === "NURAA Castile Olive Soap" || name === "NURAA Green Clay Texturizing Soap" || name === "NURAA Velvet Rose & Shea Soap" || name === "NURAA Golden Saffron Glow Bar") {
        return "kojic_detan_soap.jpg";
    }
    if (name === "NURAA Charcoal Detox Soap") {
        return "charcoal_detox_soap.jpg";
    }
    if (name === "NURAA 2% Alpha Arbutin Serum" || name === "NURAA 10% Niacinamide Clarifying Serum" || name === "NURAA Squalane & Neroli Glow Drops" || name === "NURAA 2% BHA Acne Serum" || name === "NURAA 2% Hyaluronic Acid Hydration Serum" || name === "NURAA 10% Vitamin C Radiance Serum") {
        return "bright_reveal_serum.jpg";
    }
    if (name === "NURAA De-Tan UV Shield SPF 50 PA++++" || name === "NURAA Matte Oil-Control Sunscreen SPF 50" || name === "NURAA Ultra-Light Fluid Sunscreen SPF 50" || name === "NURAA Dewy Vanilla Glow Sunscreen SPF 50" || name === "NURAA Vitamin C Dewy Sunscreen SPF 50" || name === "NURAA Hybrid Mineral Sunscreen SPF 50") {
        return "natural_shield_sunscreen.jpg";
    }
    if (name === "NURAA Glow Restore Radiance Cream" || name === "NURAA Radiance Restoring Cream-Serum" || name === "NURAA Glow Cream") {
        return "glow_restore_cream.jpg";
    }
    
    // Type base styling fallbacks to resolve format mismatch
    if (type === "Body Soap" || name.includes("Soap") || name.includes("Bar")) {
        if (category === "blackheads") return "charcoal_detox_soap.jpg";
        return "kojic_detan_soap.jpg";
    }
    if (type === "Face Serum" || type === "Face Oil" || name.includes("Serum") || name.includes("Drops") || name.includes("Oil")) {
        return "bright_reveal_serum.jpg";
    }
    if (type === "Sunscreen" || name.includes("Sunscreen") || name.includes("Shield") || name.includes("Mist")) {
        return "natural_shield_sunscreen.jpg";
    }
    if (type === "Face Wash" || type === "Cleanser" || name.includes("Cleanser")) {
        return "natural_shield_sunscreen.jpg";
    }
    if (type === "Body Wash" || type === "Shower Gel" || name.includes("Wash") || name.includes("Gel")) {
        return "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=500";
    }
    return "glow_restore_cream.jpg";
}

// Enriched product specifications for the main hero catalog
const productSpecs = {
    "NURAA 2% Alpha Arbutin Serum": {
        price: 349,
        originalPrice: 499,
        description: "A high-potency, lightweight face serum formulated with 2% Alpha Arbutin and 10% Niacinamide. Directly targets hyperpigmentation, dark spots, and uneven skin tone for visible results in 1-2 weeks.",
        ingredients: [
            { name: "Alpha Arbutin", percentage: "2.0%", purpose: "Lightens hyperpigmentation by blocking melanin synthesis (tyrosinase inhibition)" },
            { name: "Niacinamide (Vit B3)", percentage: "10.0%", purpose: "Prevents transfer of pigment to skin surface and strengthens lipid barrier" },
            { name: "Licorice Extract", percentage: "5.0%", purpose: "Natural antioxidant that decomposes dispersed melanin clusters" },
            { name: "Hyaluronic Acid", percentage: "1.0%", purpose: "Holds moisture in skin layers to provide a plump, radiant look" }
        ],
        concernTitle: "Pigmentation & Dark Spots (How it works)",
        concernSolution: "Alpha Arbutin acts at the cellular level to inhibit pigment-forming cells. Niacinamide acts as a shield, preventing that pigment from moving to surface skin cells. Together they clear existing marks and block new tan buildup.",
        howToUse: [
            "Cleanse your face thoroughly with a gentle cleanser.",
            "Apply 3-4 drops of Bright Reveal Serum onto face and neck.",
            "Gently pat (do not rub) until fully absorbed.",
            "Always follow up with Sunscreen during the day."
        ],
        primaryPackaging: "30ml frosted pharmaceutical-grade amber glass bottle with a premium metallic gold dropper collar cap.",
        secondaryPackaging: "Matte 350 GSM recycled cardboard slide-out drawer box with golden hot foil logo stamping.",
        angles: [
            { image: "bright_reveal_serum.jpg", label: "Angle 1: Dropper Bottle Container View" },
            { image: "bright_reveal_serum_box.jpg", label: "Angle 2: Slide-out Rigid Packaging Box View" },
            { image: "brand_story.jpg", label: "Angle 3: Ingredients Texture View" }
        ]
    },
    "NURAA De-Tan Bathing Bar": {
        price: 249,
        originalPrice: 349,
        description: "A premium handcrafted cold-process bathing bar formulated with Lactic Acid and Kojic Acid. Specifically designed to dissolve sun tan and friction darkening in 7 days.",
        ingredients: [
            { name: "Lactic Acid (AHA)", percentage: "2.0%", purpose: "Gently breaks skin surface bonds to lift away dead cells and sun tan layers" },
            { name: "Kojic Acid", percentage: "1.0%", purpose: "Prevents melanin buildup to brighten dark spots on body and face" },
            { name: "Goat Milk", percentage: "5.0%", purpose: "Rich in lactic acid and skin-nourishing fats to prevent dry skin irritation" },
            { name: "Orange Peel Powder", percentage: "2.0%", purpose: "Provides physical micro-exfoliation to scrub off dead cells" }
        ],
        concernTitle: "Sun Tan & Dark Joints (How it works)",
        concernSolution: "Sun tan binds to the outer layer of skin cells. Lactic Acid breaks this surface bond, allowing the dead tanned skin to exfoliate naturally. Goat milk acts as a soothing moisture pad, keeping skin supple while active Kojic Acid lightens dark areas.",
        howToUse: [
            "Wet your body or face with lukewarm water.",
            "Rub the soap bar between hands to generate a creamy rich lather.",
            "Massage lather onto body skin, focusing on tanned joints and neck.",
            "Rinse thoroughly and pat dry. Apply moisturizer."
        ],
        primaryPackaging: "Textured breathable butter paper wrap sealed with a gold foil leaf sticker containing the batch number.",
        secondaryPackaging: "Matte off-white recycled paperboard slide-out drawer box with gold ribbon pull-tab.",
        angles: [
            { image: "kojic_detan_soap.jpg", label: "Angle 1: Wrapped Soap Block View" },
            { image: "kojic_detan_soap_box.jpg", label: "Angle 2: Unboxed Drawer Packaging Box View" },
            { image: "brand_story.jpg", label: "Angle 3: Botanical Scene View" }
        ]
    },
    "NURAA De-Tan UV Shield SPF 50 PA++++": {
        price: 399,
        originalPrice: 499,
        description: "An ultra-light, non-greasy hybrid sunscreen with SPF 50 and PA++++ protection. Infused with Niacinamide to prevent future tanning while treating existing pigmentation.",
        ingredients: [
            { name: "Zinc Oxide", percentage: "5.0%", purpose: "Broad-spectrum mineral filter that reflects harmful UVA and UVB rays" },
            { name: "Niacinamide", percentage: "2.0%", purpose: "Controls sebum and brightens skin tone while protecting the barrier" },
            { name: "Aloe Vera Juice", percentage: "10.0%", purpose: "Soothes skin and cools inflammation from active sun exposure" }
        ],
        concernTitle: "Sun Damage & Tan Prevention (How it works)",
        concernSolution: "Zinc Oxide creates a physical mirror-shield on the skin surface that reflects heat and ultraviolet radiation, preventing sunburn and melanin trigger activation. Niacinamide prevents moisture loss.",
        howToUse: [
            "Use as the final step of your morning skincare routine.",
            "Take two finger-lengths of sunscreen and apply generously on face and neck.",
            "Blend gently until it absorbs cleanly with zero white cast.",
            "Reapply every 3-4 hours if directly exposed to sun."
        ],
        primaryPackaging: "50g matte white squeezable tube with a golden metallic screw-on cap.",
        secondaryPackaging: "Matte textured ivory carton with gold foil details.",
        angles: [
            { image: "natural_shield_sunscreen.jpg", label: "Angle 1: Tube Container View" },
            { image: "natural_shield_sunscreen_box.jpg", label: "Angle 2: Sunscreen Outer Packaging Box View" },
            { image: "brand_story.jpg", label: "Angle 3: Story Shoot View" }
        ]
    },
    "NURAA Charcoal Detox Soap": {
        price: 199,
        originalPrice: 299,
        description: "A deep-cleansing detox bar with 3% Activated Charcoal and Salicylic Acid. Targets body acne, back acne (bacne), and clogged pores. Removes blackheads in 5-7 days.",
        ingredients: [
            { name: "Activated Charcoal", percentage: "3.0%", purpose: "Adsorbs deep pores sebum, impurities, and micro-particles of dust" },
            { name: "Salicylic Acid (BHA)", percentage: "1.0%", purpose: "Oil-soluble active that penetrates inside pores to dissolve sebum blocks" },
            { name: "Neem & Tulsi Oils", percentage: "4.0%", purpose: "Organic extracts to prevent bacterial acne proliferation" }
        ],
        concernTitle: "Acne, Clogged Pores & Blackheads (How it works)",
        concernSolution: "Salicylic Acid (BHA) goes deep inside oil pores to break down the sticky glue of sebum and dead skin that causes blackheads. Activated charcoal acts like a magnet, pulling these dissolved plugs and dirt out of the pores.",
        howToUse: [
            "Wet face or body skin with warm water to open pores.",
            "Lather the soap block and massage gently on acne-prone areas.",
            "Leave lather on skin for 30-45 seconds for Salicylic Acid to act.",
            "Rinse cleanly with cold water to close pores."
        ],
        primaryPackaging: "Textured breathable butter paper wrap with a gold foil leaf sticker seal.",
        secondaryPackaging: "Matte 350 GSM cardboard sliding box with gold foil logo stamping.",
        angles: [
            { image: "charcoal_detox_soap.jpg", label: "Angle 1: Charcoal Soap Block View" },
            { image: "charcoal_detox_soap_box.jpg", label: "Angle 2: Sliding Drawer Box Packaging View" },
            { image: "brand_story.jpg", label: "Angle 3: Ingredients Backdrop View" }
        ]
    }
};

// Generate fallback descriptions & specs dynamically for all 30 products
function getPdpSpecs(name, category, type, ingredientsText) {
    if (productSpecs[name]) return productSpecs[name];
    const image = getProductFileName(name, type, category);
    
    // Parse ingredients cleanly
    const parsedIng = ingredientsText.split("·").map(x => {
        const cleaned = x.trim();
        const perc = cleaned.match(/\d+%/);
        const namePart = cleaned.replace(/\d+%/, "").trim();
        return {
            name: namePart,
            percentage: perc ? perc[0] : "1-2%",
            purpose: `Active compound targeting ${category} concerns.`
        };
    });

    // Provide concern solver science explanation
    const solverMap = {
        "tan": "Sun tan binds to the outer layer of skin cells. The AHA exfoliators break this surface bond, allowing the dead tanned skin to exfoliate naturally, while actives limit melanin synthesis.",
        "blackheads": "Salicylic Acid (BHA) goes deep inside oil pores to break down the sticky glue of sebum and dead skin that causes blackheads. Activated charcoal pulls these dissolved plugs out.",
        "whiteheads": "Whiteheads form when dead skin and sebum clog the pore opening. Mineral clays absorb surface sebum while mild chemical exfoliants smooth rough texturing.",
        "fragrance": "Pure steam-distilled essential oils soothe the central nervous system through aromatherapy, while squalane and lipid carriers lock in natural botanical skin moisture.",
        "glow": "Vitamin C neutralizes free radical cellular damage from pollution. Traditional skin brightening herbs act as melanin blockers to restore surface reflectance and glow.",
        "allskin": "Formulated with skin barrier-identical lipids (Ceramides) and natural anti-inflammatory extracts (Centella/Oatmeal) to soothe irritation and retain moisture in all skin types."
    };

    // Auto-create box file name mockups based on format
    let boxImage = "bright_reveal_serum_box.jpg";
    if (type === "Body Soap") boxImage = "kojic_detan_soap_box.jpg";
    if (type === "Sunscreen" || type === "Face Wash") boxImage = "natural_shield_sunscreen_box.jpg";

    return {
        price: type === "Body Soap" ? 249 : (type === "Face Serum" ? 349 : 399),
        originalPrice: type === "Body Soap" ? 349 : (type === "Face Serum" ? 499 : 549),
        description: `A premium NURAA ${type} formulated with ${ingredientsText}. Designed for target concerns with 100% transparent active ingredients.`,
        ingredients: parsedIng,
        concernTitle: `${category.toUpperCase()} Skin Repair Science`,
        concernSolution: solverMap[category] || "Active herbal compounds work synergistically to restore skin barrier health and maintain clarity.",
        howToUse: [
            "Apply a small amount to clean skin.",
            "Massage gently in circular motions until absorbed.",
            "Use daily in your skincare ritual."
        ],
        primaryPackaging: type === "Body Soap" ? "Textured breathable butter paper wrap sealed with a gold foil leaf sticker." : "Frosted glass container with premium metallic gold collar.",
        secondaryPackaging: "Matte 350 GSM recycled cardstock slide-out drawer box with gold ribbon pull-tab.",
        angles: [
            { image: image, label: `Angle 1: ${name} container packaging view` },
            { image: boxImage, label: `Angle 2: ${name} protective outer box packaging view` },
            { image: "brand_story.jpg", label: "Angle 3: Ingredients texture view" }
        ]
    };
}

function renderProducts(filter='all'){
    const grid=document.getElementById('productGrid');
    if(!grid)return;
    const list=filter==='all'?products:products.filter(x=>x[0]===filter);
    document.getElementById('countLabel').textContent=`${list.length} formulas`;
    grid.innerHTML=list.map((p,i)=> {
        const spec = getPdpSpecs(p[1], p[0], p[2], p[3]);
        const imgFile = getProductFileName(p[1], p[2], p[0]);
        return `<article class="product-card">
            <a href="product.html?name=${encodeURIComponent(p[1])}">
                <div class="product-img-wrapper" style="background-image: url('${imgFile}'); background-size: cover; background-position: center; aspect-ratio: 1/1.1; border-radius: 2px; border: 1px solid var(--line);" role="img" aria-label="${p[1]} packaging box and container closeup photography"></div>
                <span class="tag">${p[0].toUpperCase()} / ${p[2].toUpperCase()}</span>
                <h3>${p[1]}</h3>
                <div style="font-size:12px; margin-bottom:8px; font-weight:600; color:var(--charcoal);">₹${spec.price}</div>
                <p>${p[3]}</p>
            </a>
            <button class="text-link add" onclick="addToCart('${p[1].replaceAll("'","\\'")}')">ADD TO BAG&nbsp; +</button>
        </article>`;
    }).join('');
}

function changePdpImage(src, btn) {
    const mainImg = document.getElementById('mainPdpImage');
    if (mainImg) {
        mainImg.style.backgroundImage = `url('${src}')`;
        mainImg.setAttribute('aria-label', btn.getAttribute('aria-label'));
    }
    document.querySelectorAll('.pdp-thumb').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
}

function renderPdp(){
    const el=document.getElementById('pdp');
    if(!el)return;
    const name=new URLSearchParams(location.search).get('name')||products[4][1];
    const p=products.find(x=>x[1]===name)||products[4];
    const spec=getPdpSpecs(p[1], p[0], p[2], p[3]);

    el.innerHTML=`<section class="pdp"><div class="pdp-grid">
        <div class="pdp-gallery">
            <div id="mainPdpImage" class="main-pdp-image" style="background-image: url('${spec.angles[0].image}');"></div>
            <div class="pdp-thumbs">
                ${spec.angles.map((ang, idx) => `<button class="pdp-thumb ${idx===0?'active':''}" onclick="changePdpImage('${ang.image}', this)" style="background-image: url('${ang.image}');" aria-label="${ang.label}"></button>`).join('')}
            </div>
        </div>
        <div>
            <p class="category">${p[0].toUpperCase()} / ${p[2].toUpperCase()}</p>
            <h1>${p[1]}</h1>
            <div class="price-row">
                <span class="price">₹${spec.price}</span>
                <span class="original-price">₹${spec.originalPrice}</span>
            </div>
            <p class="desc">${spec.description}</p>
            
            <!-- Transparency Active Ingredient Percentage Matrix -->
            <div class="transparency-matrix">
                <p class="section-title">🧪 Ingredient Active Percentage & Purpose</p>
                <div class="matrix-table">
                    ${spec.ingredients.map(ing => `
                        <div class="matrix-row">
                            <span class="ing-name"><strong>${ing.name}</strong> (${ing.percentage})</span>
                            <span class="ing-purpose">${ing.purpose}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <!-- Scientific Mechanism of Action -->
            <div class="concern-solver-card">
                <p class="solver-title">🔬 Concern Solution: ${spec.concernTitle}</p>
                <p class="solver-desc">${spec.concernSolution}</p>
            </div>

            <button class="btn" style="width:100%; margin:25px 0 15px;" onclick="addToCart('${p[1].replaceAll("'","\\'")}')">ADD TO BAG</button>
            
            <div class="accord" onclick="toggleAccord(this)">HOW TO USE <span>＋</span>
                <div class="accord-content" style="display:none; padding-top:10px; color:var(--muted); font-size:11px; line-height:1.6;">
                    ${spec.howToUse.map((step, i) => `<p style="margin:5px 0;"><strong>Step 0${i+1}:</strong> ${step}</p>`).join('')}
                </div>
            </div>
            <div class="accord" onclick="toggleAccord(this)">PACKAGING DETAILS <span>＋</span>
                <div class="accord-content" style="display:none; padding-top:10px; color:var(--muted); font-size:11px; line-height:1.6;">
                    <p style="margin:5px 0;"><strong>Inside Packaging (Primary):</strong> ${spec.primaryPackaging}</p>
                    <p style="margin:5px 0;"><strong>Outside Box (Secondary):</strong> ${spec.secondaryPackaging}</p>
                </div>
            </div>
        </div>
    </div></section>`;
}

function toggleAccord(el) {
    const content = el.querySelector('.accord-content');
    const span = el.querySelector('span');
    if (content) {
        if (content.style.display === 'none') {
            content.style.display = 'block';
            span.innerHTML = '－';
        } else {
            content.style.display = 'none';
            span.innerHTML = '＋';
        }
    }
}

document.addEventListener('DOMContentLoaded',()=>{
    renderProducts();
    renderPdp();
    renderCart();
    document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{
        document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));
        b.classList.add('active');
        renderProducts(b.dataset.filter);
    }));
});
