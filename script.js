const products=[
['tan','Lactic Acid De-Tan Bar','Body Soap','2% Lactic Acid + Goat Milk + Orange Peel'],['tan','AHA Exfoliating Body Wash','Body Wash','3% Lactic Acid + Papaya Extract'],['tan','Brightening Kojic Cleanser','Face Wash','1% Kojic Acid + Licorice Extract'],['tan','Natural Shield Sunscreen SPF 50','Sunscreen','Zinc Oxide + 2% Niacinamide'],['tan','Bright Reveal Serum','Face Serum','2% Alpha Arbutin + 10% Niacinamide'],
['blackheads','Charcoal Detox Soap','Body Soap','3% Activated Charcoal + 1% Salicylic Acid + Neem'],['blackheads','Deep Pore Charcoal Body Wash','Body Wash','2% Salicylic Acid + Tea Tree Oil'],['blackheads','BHA Clear Pore Cleanser','Face Wash','2% Salicylic Acid + Centella Asiatica'],['blackheads','Matte Gel Oil-Control Sunscreen','Sunscreen','Silica Matte + SPF 50'],['blackheads','Pore Clarifying Serum','Face Serum','2% Salicylic Acid + 5% Zinc PCA'],
['whiteheads','Green Clay Smoothing Bar','Body Soap','French Green Clay + 1% Salicylic Acid'],['whiteheads','Smooth Skin Exfoliating Wash','Body Wash','2% Lactic Acid + Aloe Vera'],['whiteheads','Gentle Clay Face Cleanser','Face Wash','Kaolin Clay + Tea Tree'],['whiteheads','Ultra Light Fluid Sunscreen','Sunscreen','SPF 50 + PA++++'],['whiteheads','AHA/BHA Exfoliating Serum','Face Serum','10% Lactic Acid + 2% Salicylic Acid'],
['fragrance','Sandalwood Honey Bar','Body Soap','Pure Chandan Oil + Raw Honey'],['fragrance','Rose Vetiver Body Wash','Body Wash','Rose Absolute + Vetiver Oil'],['fragrance','Jasmine Soothing Face Wash','Face Wash','Jasmine Hydrosol + Aloe Vera'],['fragrance','Fragrant Sun Mist','Sunscreen','Aloe mist + SPF 30'],['fragrance','Rosehip Radiance Oil','Face Serum','Pure Rosehip Seed Oil + Vitamin E'],
['glow','Vitamin C Glow Bar','Body Soap','Orange Peel Oil + 1% Kojic Acid'],['glow','Kakadu Plum Glow Wash','Body Wash','Kakadu Plum Extract + Vitamin C'],['glow','Vitamin C Foaming Wash','Face Wash','3% Vitamin C + Licorice'],['glow','Dewy Glow Sunscreen','Sunscreen','SPF 50 + Hyaluronic Acid'],['glow','Radiance Restoring Cream-Serum','Face Serum','3% Vitamin C + 1% Kojic Acid'],
['allskin','Oatmeal Shea Butter Soap','Body Soap','Colloidal Oatmeal + Shea Butter'],['allskin','Ceramide Hydrating Wash','Body Wash','Ceramides + Coconut Milk'],['allskin','Gentle Hydrating Cleanser','Face Wash','Hyaluronic Acid + Centella/Cica'],['allskin','Barrier Repair Sunscreen','Sunscreen','SPF 50 + Ceramides'],['allskin','Barrier Recovery Serum','Face Serum','5% Niacinamide + Ceramides']
];

// Enriched product specifications for the main hero catalog
const productSpecs = {
    "Bright Reveal Serum": {
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
            { image: "bright_reveal_serum.jpg", label: "Angle 1: Dropper Bottle" },
            { image: "nuraa_hero_products.jpg", label: "Angle 2: Collection Shoot" },
            { image: "brand_story.jpg", label: "Angle 3: Ingredients Shoot" }
        ]
    },
    "Lactic Acid De-Tan Bar": {
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
            { image: "kojic_detan_soap.jpg", label: "Angle 1: Wrapped Soap" },
            { image: "nuraa_bundle_shot.jpg", label: "Angle 2: Unboxed Drawer" },
            { image: "brand_story.jpg", label: "Angle 3: Botanical Scene" }
        ]
    },
    "Natural Shield Sunscreen SPF 50": {
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
            { image: "natural_shield_sunscreen.jpg", label: "Angle 1: Tube Shoot" },
            { image: "nuraa_hero_products.jpg", label: "Angle 2: Product Trio" },
            { image: "brand_story.jpg", label: "Angle 3: Story Shoot" }
        ]
    },
    "Charcoal Detox Soap": {
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
            { image: "charcoal_detox_soap.jpg", label: "Angle 1: Charcoal Block" },
            { image: "nuraa_bundle_shot.jpg", label: "Angle 2: Full Drawer Kit" },
            { image: "brand_story.jpg", label: "Angle 3: Ingredients Backdrop" }
        ]
    },
    "Radiance Restoring Cream-Serum": {
        price: 399,
        originalPrice: 549,
        description: "A luxurious, deep-nourishing face cream designed to restore skin barrier health and lock in hydration. Formulated with Kojic Acid and Vitamin C to fade dullness.",
        ingredients: [
            { name: "Vitamin C (EAA)", percentage: "3.0%", purpose: "Brightens dull skin cells and triggers collagen production" },
            { name: "Kojic Acid", percentage: "2.0%", purpose: "Targets stubborn brown spots and UV-induced hyperpigmentation" },
            { name: "Shea Butter & Almond Oil", percentage: "7.0%", purpose: "Rich lipid complex that mimics skin barrier fats to keep skin soft" }
        ],
        concernTitle: "Skin Dullness & Barrier Recovery (How it works)",
        concernSolution: "Vitamin C neutralizes free radical cellular damage from pollution. Kojic Acid targets melanin pathways to brighten dark areas, while Shea Butter lipids repair dry cell gaps, creating smooth, reflective radiant skin.",
        howToUse: [
            "Apply a pea-sized amount onto clean face and neck.",
            "Massage in gentle upward circular motions until fully absorbed.",
            "Use every evening as your night cream."
        ],
        primaryPackaging: "50g premium frosted glass jar with a golden screw-on cap.",
        secondaryPackaging: "Matte textured ivory carton with gold foil branding.",
        angles: [
            { image: "glow_restore_cream.jpg", label: "Angle 1: Frosted Jar" },
            { image: "nuraa_hero_products.jpg", label: "Angle 2: Product Trio" },
            { image: "brand_story.jpg", label: "Angle 3: Botanical Scene" }
        ]
    }
};

function getProductImage(name) {
    if (name === "Bright Reveal Serum") return "bright_reveal_serum.jpg";
    if (name === "Glow Restore Radiance Cream" || name === "Radiance Restoring Cream-Serum") return "glow_restore_cream.jpg";
    if (name === "Natural Shield Sunscreen SPF 50" || name === "Natural Shield Sunscreen" || name === "Barrier Repair Sunscreen") return "natural_shield_sunscreen.jpg";
    if (name === "Lactic Acid De-Tan Bar" || name === "Kojic Acid De-Tan Soap") return "kojic_detan_soap.jpg";
    if (name === "Charcoal Detox Soap" || name === "Activated Charcoal Soap") return "charcoal_detox_soap.jpg";
    
    // Fallback images
    if (name.includes("Soap")) return "kojic_detan_soap.jpg";
    if (name.includes("Wash")) return "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=500";
    if (name.includes("Cleanser")) return "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=500";
    if (name.includes("Sunscreen") || name.includes("Mist")) return "natural_shield_sunscreen.jpg";
    return "bright_reveal_serum.jpg";
}

// Fallback generator for general PDP specs
function getPdpSpecs(name, category, type, ingredientsText) {
    if (productSpecs[name]) return productSpecs[name];
    
    // Auto-create detailed spec for non-hero items
    const parsedIng = ingredientsText.split("+").map(x => {
        const cleaned = x.trim();
        const perc = cleaned.match(/\d+%/);
        const namePart = cleaned.replace(/\d+%/, "").trim();
        return {
            name: namePart,
            percentage: perc ? perc[0] : "1-2%",
            purpose: `Active compound targeting ${category} recovery`
        };
    });

    return {
        price: 299,
        originalPrice: 399,
        description: `A specialized NURAA ${type} formulated with ${ingredientsText}. Designed for target concerns with 100% transparent active ingredients.`,
        ingredients: parsedIng,
        concernTitle: `${category.toUpperCase()} Repair Action`,
        concernSolution: `Specially formulated active molecules work to penetrate target layers, resolve ${category} buildup, and rebuild skin health.`,
        howToUse: [
            "Apply a small amount to the target area.",
            "Massage gently in circular motions.",
            "Include in your daily morning or night routine."
        ],
        primaryPackaging: "Eco-conscious packaging with frosted glass or white LDPE caps.",
        secondaryPackaging: "Matte ivory recycled paper box with gold hot foil stamping.",
        angles: [
            { image: getProductImage(name), label: "Angle 1: Product View" },
            { image: "nuraa_hero_products.jpg", label: "Angle 2: Full Collection" },
            { image: "brand_story.jpg", label: "Angle 3: Botanicals" }
        ]
    };
}

let cart=JSON.parse(localStorage.getItem('nuraaCart')||'[]');
function toggleCart(){document.getElementById('cart')?.classList.toggle('open');renderCart()}
function addToCart(name){cart.push(name);localStorage.setItem('nuraaCart',JSON.stringify(cart));renderCart();document.getElementById('cart')?.classList.add('open')}
function renderCart(){document.querySelectorAll('#cartCount').forEach(x=>x.textContent=cart.length);const el=document.getElementById('cartItems');if(!el)return;el.innerHTML=cart.length?cart.map((x,i)=>`<div class="cart-line"><span>${x}</span><button onclick="removeFromCart(${i})">×</button></div>`).join('')+'<a class="btn" style="margin-top:30px" href="#">CHECKOUT</a>':'Your ritual starts here.<br><a href="shop.html">Explore the collection →</a>'}
function removeFromCart(i){cart.splice(i,1);localStorage.setItem('nuraaCart',JSON.stringify(cart));renderCart()}

function renderProducts(filter='all'){
    const grid=document.getElementById('productGrid');
    if(!grid)return;
    const list=filter==='all'?products:products.filter(x=>x[0]===filter);
    document.getElementById('countLabel').textContent=`${list.length} formulas`;
    grid.innerHTML=list.map((p,i)=> {
        const spec = productSpecs[p[1]] || { price: 299 };
        return `<article class="product-card">
            <a href="product.html?name=${encodeURIComponent(p[1])}">
                <div class="product-img-wrapper" style="background-image: url('${getProductImage(p[1])}'); background-size: cover; background-position: center; aspect-ratio: 1/1.1; border-radius: 2px; border: 1px solid var(--line);"></div>
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
    if (mainImg) mainImg.style.backgroundImage = `url('${src}')`;
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
