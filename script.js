// Placeholder quizzes
let quizzes = {
  quiz1: [
    {q:"Which of the following is the primary purpose of urinalysis?", options:["Diagnose urinary tract infections","Assess renal and metabolic disorders","Monitor hydration status","All of the above"], answer:3},
    {q:"What percentage of laboratory diagnoses are estimated to involve urinalysis?", options:["30%","50%","70%","90%"], answer:2},
    {q:"Which of the following is NOT a function of the kidney?", options:["Regulation of blood pressure","Detoxification of harmful gases","Maintenance of acid-base balance","Excretion of metabolic waste"], answer:1},
    {q:"The nephron is composed of which two main structures?", options:["Glomerulus and tubules","Glomerulus and renal pelvis","Tubules and ureters","Renal artery and vein"], answer:0},
    {q:"How many nephrons are found in each kidney?", options:["About 100,000","About 500,000","About 1 million","About 10 million"], answer:2},
    {q:"Which of the following is considered the functional unit of the kidney?", options:["Nephron","Glomerulus","Bowman’s capsule","Renal pelvis"], answer:0},
    {q:"Which structure collects urine from the nephrons before passing it to the ureter?", options:["Renal cortex","Renal medulla","Renal pelvis","Renal artery"], answer:2},
    {q:"Which part of the nephron is primarily involved in filtration?", options:["Proximal tubule","Loop of Henle","Glomerulus","Collecting duct"], answer:2},
    {q:"The Bowman’s capsule surrounds which structure?", options:["Distal convoluted tubule","Glomerulus","Loop of Henle","Renal pelvis"], answer:1},
    {q:"The primary process occurring in the glomerulus is:", options:["Secretion","Filtration","Reabsorption","Concentration"], answer:1},
    {q:"Which specimen is most commonly used for routine urinalysis?", options:["First morning urine","Random urine","24-hour urine","Catheterized specimen"], answer:1},
    {q:"The ideal specimen for pregnancy testing is:", options:["Random urine","First morning urine","Timed urine","24-hour urine"], answer:1},
    {q:"Which specimen is best for detecting orthostatic proteinuria?", options:["Random urine","Midstream clean-catch","First morning and second specimen comparison","24-hour urine"], answer:2},
    {q:"Which type of urine specimen is most useful for detecting nitrite and leukocyte esterase?", options:["First morning urine","24-hour urine","Random urine","Midstream clean-catch"], answer:3},
    {q:"Which urine collection method minimizes contamination?", options:["Catheterization","Midstream clean-catch","Suprapubic aspiration","All of the above"], answer:3},
    {q:"The best urine specimen for culture and sensitivity testing is:", options:["First morning urine","Random urine","24-hour urine","Midstream clean-catch"], answer:3},
    {q:"Which urine collection method is used for pediatric patients?", options:["First morning urine","Random urine","Urine collection bag","24-hour urine"], answer:2},
    {q:"The 24-hour urine specimen is primarily collected to:", options:["Measure solute excretion","Measure urine pH","Perform routine urinalysis","Detect infection"], answer:0},
    {q:"Which preservative is commonly used in 24-hour urine collection?", options:["Formalin","Toluene","Thymol","All of the above"], answer:3},
    {q:"The volume of urine normally excreted in 24 hours is approximately:", options:["200–500 mL","600–2000 mL","2500–3000 mL","3500–4000 mL"], answer:1},
    {q:"Oliguria refers to urine output less than:", options:["100 mL/day","200 mL/day","400 mL/day","600 mL/day"], answer:2},
    {q:"Anuria is defined as urine output less than:", options:["10 mL/day","50 mL/day","100 mL/day","200 mL/day"], answer:1},
    {q:"Polyuria is usually defined as urine output greater than:", options:["1000 mL/day","1500 mL/day","2000 mL/day","2500 mL/day"], answer:2},
    {q:"Which of the following may cause polyuria?", options:["Diabetes mellitus","Diabetes insipidus","Excessive fluid intake","All of the above"], answer:3},
    {q:"Which condition is associated with oliguria?", options:["Dehydration","Shock","Renal failure","All of the above"], answer:3},
    {q:"Nocturia refers to:", options:["Decreased urine at night","Excessive urination at night","Painful urination","Frequent urination"], answer:1},
    {q:"Which term refers to painful urination?", options:["Nocturia","Dysuria","Polyuria","Oliguria"], answer:1},
    {q:"Which term refers to increased frequency of urination?", options:["Dysuria","Polyuria","Frequency","Nocturia"], answer:2},
    {q:"The presence of visible blood in urine is called:", options:["Hemoglobinuria","Hematuria","Myoglobinuria","Bilirubinuria"], answer:1},
    {q:"Which urine collection method is most sterile?", options:["Midstream clean-catch","Catheterization","Suprapubic aspiration","Random collection"], answer:2},
    {q:"Which urine collection is preferred for cytology studies?", options:["First morning urine","24-hour urine","Random urine","Second morning voided urine"], answer:3},
    {q:"Specimens for routine urinalysis should be examined within:", options:["30 minutes","1 hour","2 hours","4 hours"], answer:1},
    {q:"If a urine specimen cannot be examined promptly, it should be:", options:["Frozen immediately","Preserved with ethanol","Refrigerated","Diluted with saline"], answer:2},
    {q:"Which change may occur in urine left unpreserved at room temperature?", options:["Decreased pH","Decreased bacteria","Increased glucose","Increased nitrite"], answer:3},
    {q:"Which component decreases in unpreserved urine?", options:["Nitrite","pH","Glucose","Bacteria"], answer:2},
    {q:"A urine specimen left standing at room temperature will have:", options:["Increased clarity","Decreased pH","Increased bacteria","Decreased nitrite"], answer:2},
    {q:"Which of the following is a disadvantage of refrigeration as a preservative?", options:["Prevents bacterial growth","Preserves chemical constituents","May cause precipitation of crystals","Prevents decomposition"], answer:2},
    {q:"Which is the most common preservative for urine specimens?", options:["Formalin","Toluene","Refrigeration","Thymol"], answer:2},
    {q:"Which urine specimen is best for detecting metabolic disorders?", options:["First morning urine","Random urine","24-hour urine","Midstream urine"], answer:2},
    {q:"The least desirable urine specimen for routine analysis is:", options:["First morning urine","Random urine","Midstream urine","24-hour urine"], answer:1},
    {q:"Which vessel carries blood away from the glomerulus?", options:["Afferent arteriole","Efferent arteriole","Vasa recta","Renal vein"], answer:1},
    {q:"Approximately how much plasma is filtered by the glomerulus per minute?", options:["20 mL/min","120 mL/min","600 mL/min","1000 mL/min"], answer:1},
    {q:"Which structure surrounds the glomerulus and collects the filtrate?", options:["Loop of Henle","Bowman’s capsule","Distal tubule","Collecting duct"], answer:1},
    {q:"Which type of nephron is primarily responsible for concentrating urine?", options:["Cortical nephron","Juxtamedullary nephron","Medullary nephron","Subcortical nephron"], answer:1},
    {q:"Which of the following is TRUE about cortical nephrons?", options:["They make up about 85% of nephrons","They extend deep into the medulla","They are responsible for urine concentration","They are fewer than juxtamedullary nephrons"], answer:0},
    {q:"What is the renal threshold for glucose reabsorption?", options:["70–100 mg/dL","120–140 mg/dL","160–180 mg/dL","200–250 mg/dL"], answer:2},
    {q:"The renal threshold for protein is approximately:", options:["10 mg/dL","50 mg/dL","100 mg/dL","200 mg/dL"], answer:0},
    {q:"Which part of the nephron reabsorbs about 65% of filtrate?", options:["Loop of Henle","Distal convoluted tubule","Proximal convoluted tubule","Collecting duct"], answer:2},
    {q:"Which part of the nephron is impermeable to water?", options:["Descending loop of Henle","Ascending loop of Henle","Collecting duct","Proximal tubule"], answer:1},
    {q:"Which hormone regulates water reabsorption in the distal tubule and collecting duct?", options:["Aldosterone","Cortisol","ADH (vasopressin)","Renin"], answer:2},
    {q:"Diabetes insipidus is caused by:", options:["Excess ADH","Lack of ADH","Excess aldosterone","Lack of cortisol"], answer:1},
    {q:"Syndrome of inappropriate ADH secretion (SIADH) results in:", options:["Polyuria","Oliguria","Anuria","Glucosuria"], answer:1},
    {q:"Which hormone increases sodium reabsorption and potassium secretion?", options:["Aldosterone","ADH","Renin","Erythropoietin"], answer:0},
    {q:"Which enzyme converts angiotensin I into angiotensin II?", options:["ACE","Renin","Aldosterone","ADH"], answer:0},
    {q:"Which effect is caused by angiotensin II?", options:["Vasodilation of efferent arteriole","Vasoconstriction of efferent arteriole","Inhibition of sodium reabsorption","Inhibition of ADH release"], answer:1},
    {q:"The juxtaglomerular apparatus detects:", options:["Blood glucose levels","Sodium content in plasma","Urea concentration","Oxygen saturation"], answer:1},
    {q:"Which cells in the afferent arteriole release renin?", options:["Podocytes","Juxtaglomerular cells","Macula densa","Endothelial cells"], answer:1},
    {q:"Which hormone stimulates erythropoiesis in bone marrow?", options:["Renin","Aldosterone","Erythropoietin","Cortisol"], answer:2},
    {q:"Which of the following favors glomerular filtration?", options:["Hydrostatic pressure in glomerulus","Oncotic pressure of plasma proteins","Increased efferent arteriole resistance","Low blood pressure"], answer:0},
    {q:"What is the average renal plasma flow per minute?", options:["200–300 mL/min","400–500 mL/min","600–700 mL/min","800–1000 mL/min"], answer:2},
    {q:"Which structure is mainly responsible for countercurrent exchange in urine concentration?", options:["Bowman’s capsule","Vasa recta","Distal tubule","Collecting duct"], answer:1},
    {q:"Which process removes substances from blood into the tubular lumen?", options:["Filtration","Reabsorption","Secretion","Diffusion"], answer:2},
    {q:"Which ion is secreted into the renal tubules during acidosis?", options:["Sodium","Chloride","Hydrogen","Calcium"], answer:2},
    {q:"In alkalotic conditions, which compound is excreted?", options:["Ammonium ions","Bicarbonate","Urea","Sodium"], answer:1},
    {q:"The glomerular filtration rate (GFR) in a healthy adult is approximately:", options:["50 mL/min","90 mL/min","120 mL/min","200 mL/min"], answer:2},
    {q:"Which factor reduces GFR?", options:["Dilated afferent arteriole","Constricted efferent arteriole","Increased systemic blood pressure","Constricted afferent arteriole"], answer:3},
    {q:"Which of the following is an active transport mechanism?", options:["Water movement in descending loop","Chloride reabsorption in ascending loop","Urea reabsorption in PCT","Passive sodium reabsorption"], answer:1},
    {q:"Which part of the nephron reabsorbs glucose?", options:["Loop of Henle","Distal tubule","Proximal tubule","Collecting duct"], answer:2},
    {q:"The countercurrent multiplier system occurs in the:", options:["Glomerulus","Loop of Henle","Proximal tubule","Distal tubule"], answer:1},
    {q:"Which of the following increases ADH secretion?", options:["Increased body hydration","Dehydration","High sodium excretion","Low plasma osmolarity"], answer:1},
    {q:"Which best describes renal autoregulation?", options:["Kidney adjusts GFR despite changes in blood pressure","Kidney filters only electrolytes","Kidney regulates systemic glucose","Kidney prevents all protein loss"], answer:0},
    {q:"The specific gravity of glomerular filtrate is approximately:", options:["1.000","1.005","1.010","1.020"], answer:2},
    {q:"Which condition stimulates the RAAS system?", options:["High blood pressure","Low plasma sodium","Hyperkalemia","Increased plasma osmolarity"], answer:1},
    {q:"Which hormone directly increases water reabsorption in collecting ducts?", options:["Renin","Aldosterone","ADH","Erythropoietin"], answer:2},
    {q:"Which hormone deficiency causes polyuria with dilute urine?", options:["Aldosterone","ADH","Renin","Cortisol"], answer:1},
    {q:"Which renal structure is responsible for producing concentrated urine during dehydration?", options:["Loop of Henle","Proximal tubule","Distal tubule","Glomerulus"], answer:0},
    {q:"Which mechanism explains sodium reabsorption in PCT?", options:["Passive transport","Active transport","Osmosis","Diffusion"], answer:1},
    {q:"Which nephron structure is lined with podocytes?", options:["Bowman’s capsule inner layer","Distal tubule","Collecting duct","Loop of Henle"], answer:0},
    {q:"Which condition results from absence of ADH?", options:["Diabetes mellitus","Diabetes insipidus","SIADH","Nephrotic syndrome"], answer:1},
    {q:"Which of the following describes the main function of the kidney?", options:["Blood pressure regulation, waste excretion, electrolyte balance","Vitamin D production, lung oxygenation, bile secretion","Glucose regulation, insulin secretion, protein synthesis","Hormone storage, digestion, gastric acid secretion"], answer:0},
    {q:"Which of the following is considered the best routine test for kidney function?", options:["Urinalysis","Creatinine clearance","Serum glucose","Blood pH"], answer:1},
    {q:"Which endogenous waste product is most commonly used to estimate GFR?", options:["Urea","Creatinine","Ammonia","Bilirubin"], answer:1},
    {q:"Which of the following is the main disadvantage of using serum creatinine alone to measure renal function?", options:["It is not filtered by the glomerulus","It is influenced by muscle mass","It is actively secreted in the PCT","It does not appear in urine"], answer:1},
    {q:"The normal serum creatinine level is approximately:", options:["0.2–0.4 mg/dL","0.6–1.2 mg/dL","1.5–2.0 mg/dL","2.5–3.0 mg/dL"], answer:1},
    {q:"The creatinine clearance test requires which specimen type(s)?", options:["Random urine only","Serum and 24-hour urine","First morning urine only","Blood only"], answer:1},
    {q:"Which formula is commonly used to estimate creatinine clearance?", options:["Cockcroft-Gault equation","Henderson-Hasselbalch equation","Friedewald equation","MDRD equation"], answer:0},
    {q:"Urea is primarily formed in the:", options:["Kidneys","Liver","Pancreas","Lungs"], answer:1},
    {q:"Which of the following can falsely elevate blood urea nitrogen (BUN)?", options:["Low protein diet","Pregnancy","Gastrointestinal bleeding","Hypohydration"], answer:2},
    {q:"The normal BUN-to-creatinine ratio is approximately:", options:["5:1","10:1","15:1 to 20:1","25:1"], answer:2},
    {q:"An increased BUN-to-creatinine ratio with normal creatinine is most likely due to:", options:["Renal failure","Dehydration","Muscle injury","Cirrhosis"], answer:1},
    {q:"Which renal function test is most affected by protein intake?", options:["Creatinine","BUN","Uric acid","Cystatin C"], answer:1},
    {q:"Which analyte is increased in gout and renal stone formation?", options:["Urea","Uric acid","Creatinine","Ammonia"], answer:1},
    {q:"Uric acid is the end product of metabolism of:", options:["Proteins","Purines","Carbohydrates","Fatty acids"], answer:1},
    {q:"The reference method for measuring GFR is the clearance of:", options:["Creatinine","Inulin","Cystatin C","Uric acid"], answer:1},
    {q:"Which test uses radioactive substances to measure GFR?", options:["Iohexol clearance","Isotope renography","Nuclear medicine GFR scan","All of the above"], answer:3},
    {q:"Which analyte is increased in both renal failure and tissue breakdown?", options:["Urea","Glucose","Uric acid","Creatinine"], answer:3},
    {q:"Which test is most useful in detecting early diabetic nephropathy?", options:["Serum creatinine","Microalbuminuria","Uric acid","BUN"], answer:1},
    {q:"Microalbuminuria is defined as urinary albumin excretion of:", options:["0–10 mg/day","20–200 mg/day","300–500 mg/day",">1000 mg/day"], answer:1},
    {q:"Which of the following substances is freely filtered and neither reabsorbed nor secreted?", options:["Creatinine","Inulin","Uric acid","Ammonia"], answer:1},
    {q:"Cystatin C is considered a good marker for GFR because it is:", options:["Affected by diet","Constantly produced by all nucleated cells","Secreted in urine only","Only present in muscle cells"], answer:1},
    {q:"Which test is most reliable for detecting glomerular injury?", options:["Serum glucose","Urine protein","Serum cholesterol","Plasma osmolality"], answer:1},
    {q:"Which of the following can interfere with creatinine measurement using the Jaffe reaction?", options:["Glucose","Acetoacetate","Ascorbic acid","All of the above"], answer:3},
    {q:"The Jaffe reaction for creatinine uses which reagent?", options:["Sulfosalicylic acid","Picric acid","Benedict’s solution","Nitroprusside"], answer:1},
    {q:"A patient with prerenal azotemia typically has:", options:["Low BUN and high creatinine","High BUN and normal creatinine","Low BUN/Creatinine ratio","High creatinine but normal BUN"], answer:1},
    {q:"Postrenal azotemia is commonly caused by:", options:["Dehydration","Obstruction of urinary tract","Heart failure","Liver cirrhosis"], answer:1},
    {q:"A decreased BUN/Creatinine ratio is most often due to:", options:["Low protein intake or liver disease","High protein intake","Dehydration","Renal obstruction"], answer:0},
    {q:"Which analyte is most useful for monitoring dialysis therapy?", options:["Urea","Creatinine","Sodium","Potassium"], answer:0},
    {q:"Which analyte is used in calculating the estimated GFR (eGFR)?", options:["Glucose","Uric acid","Creatinine","Bilirubin"], answer:2},
    {q:"A patient with increased creatinine but normal BUN may have:", options:["Severe dehydration","Liver disease","Muscle wasting","Prerenal failure"], answer:2},
    {q:"Which test can detect renal tubular acidosis?", options:["Serum uric acid","Urinary acidification test","Creatinine clearance","Serum osmolality"], answer:1},
    {q:"Which analyte is elevated in Lesch-Nyhan syndrome?", options:["Urea","Uric acid","Creatinine","Cystatin C"], answer:1},
    {q:"In chronic renal failure, which of the following is commonly observed?", options:["Decreased creatinine","Increased serum urea and creatinine","Decreased uric acid","Increased clearance rates"], answer:1},
    {q:"Which analyte is most useful for diagnosing gout?", options:["BUN","Uric acid","Creatinine","Cystatin C"], answer:1},
    {q:"Creatinine clearance is preferred over urea clearance because:", options:["Creatinine is not reabsorbed significantly","Creatinine is less stable","Urea is more accurate","Creatinine fluctuates with diet"], answer:0},
    {q:"The most specific test for glomerular permeability is:", options:["Urinary protein electrophoresis","Urinary creatinine","Urinary glucose","Urinary bilirubin"], answer:0},
    {q:"Which condition typically lowers serum urea levels?", options:["Dehydration","High protein diet","Liver disease","Urinary obstruction"], answer:2},
    {q:"Which test is least influenced by diet?", options:["BUN","Creatinine","Uric acid","Ammonia"], answer:1},
    {q:"A high BUN and high creatinine level usually indicates:", options:["Liver failure","Renal failure","Dehydration","Malnutrition"], answer:1},
    {q:"Which analyte is NOT typically measured in renal function testing?", options:["BUN","Creatinine","Uric acid","Bilirubin"], answer:3},
    {q:"Which test best detects early diabetic nephropathy before serum creatinine rises?", options:["Microalbuminuria","Serum uric acid","BUN/Creatinine ratio","Inulin clearance"], answer:0},
    {q:"The normal color of urine ranges from:", options:["Straw to black","Pale yellow to amber","Colorless to red","Green to brown"], answer:1},
    {q:"The predominant pigment responsible for normal urine color is:", options:["Uroerythrin","Urochrome","Urobilin","Bilirubin"], answer:1},
    {q:"Urochrome production is directly proportional to:", options:["Fluid intake","Metabolic rate","Protein intake","Electrolyte balance"], answer:1},
    {q:"Pink coloration in refrigerated urine is often due to:", options:["Uroerythrin with amorphous urates","Bilirubin oxidation","Ketone accumulation","Hematuria"], answer:0},
    {q:"Urobilin imparts what color in long-standing urine?", options:["Pink","Orange-brown","Green","Purple"], answer:1},
    {q:"Dark yellow or amber urine with yellow foam suggests:", options:["Bilirubinuria","Hematuria","Ketonuria","Proteinuria"], answer:0},
    {q:"Orange urine after medication may be caused by:", options:["Pyridium","Rifampin","Nitrofurantoin","All of the above"], answer:3},
    {q:"A yellow-green urine color may indicate:", options:["Biliverdin formation","Pseudomonas infection","Phenol poisoning","Melanin oxidation"], answer:0},
    {q:"Green urine may be associated with:", options:["PKU","Pseudomonas infection","Myoglobinuria","Beeturia"], answer:1},
    {q:"Blue-green urine may be due to:", options:["Indican and methylene blue","Bilirubin","Homogentisic acid","Hemoglobin"], answer:0},
    {q:"A cloudy red urine typically indicates:", options:["Hematuria","Hemoglobinuria","Myoglobinuria","Rifampin intake"], answer:0},
    {q:"A clear red urine may suggest:", options:["Hematuria","Myoglobinuria","Hemoglobinuria","Beets ingestion"], answer:2},
    {q:"Port-wine colored urine is characteristic of:", options:["Phenol poisoning","Porphyrias","Hematuria","Myoglobinuria"], answer:1},
    {q:"Black or brown urine may result from:", options:["Methemoglobin or melanin","Urochrome oxidation","Bilirubin","Tyrosinemia"], answer:0},
    {q:"A faint cloud in long-standing urine is known as:", options:["Bilifuscin","Nubecula","Crystalluria","Pyuria"], answer:1},
    {q:"Red-brown urine due to unstable hemoglobin is called:", options:["Bilifuscin","Nubecula","Myoglobinuria","Hematuria"], answer:0},
    {q:"The normal appearance of freshly voided urine is:", options:["Turbid","Hazy","Clear","Milky"], answer:2},
    {q:"Which method is commonly used to assess urine clarity?", options:["Viewing against a white background","Using a refractometer","Microscopy","pH test"], answer:0},
    {q:"Which clarity grade describes urine that is transparent with no visible particles?", options:["Hazy","Clear","Cloudy","Turbid"], answer:1},
    {q:"Urine that is hazy with few particulates, but print is visible through it, is graded as:", options:["Clear","Hazy","Cloudy","Milky"], answer:1},
    {q:"Which clarity grade indicates print cannot be seen through the specimen?", options:["Cloudy","Hazy","Turbid","Milky"], answer:2},
    {q:"Milky urine is often due to:", options:["Lipids or chyle","Uric acid crystals","Hematuria","Ketones"], answer:0},
    {q:"Which of the following is a non-pathologic cause of urine turbidity?", options:["Epithelial cells and mucus threads","Yeast infection","WBCs in urine","Lipids"], answer:0},
    {q:"Which is a pathologic cause of urine turbidity?", options:["Refrigeration","Semen contamination","Yeast infection in DM","Talcum powder"], answer:2},
    {q:"Acid urine turbidity may be caused by:", options:["Amorphous urates","Amorphous phosphates","Bacteria","Lipids"], answer:0},
    {q:"Turbidity that disappears after heating suggests:", options:["WBCs","Yeast","Amorphous urates","Lipids"], answer:2},
    {q:"Turbidity soluble in acetic acid is due to:", options:["RBCs and phosphates","Lipids","Bacteria","Yeast"], answer:0},
    {q:"Turbidity soluble in ether is due to:", options:["Bacteria","Lipids","RBCs","Yeast"], answer:1},
    {q:"Normal urine odor is described as:", options:["Fruity","Aromatic","Foul","Ammoniacal"], answer:1},
    {q:"Ammoniacal urine odor is usually due to:", options:["Dehydration","UTI with bacterial decomposition","Ketones","Bilirubin"], answer:1},
    {q:"Fruity or sweet odor in urine is due to:", options:["Bilirubin","Glucose","Ketones","Protein"], answer:2},
    {q:"Maple syrup urine disease produces urine with odor resembling:", options:["Caramel or maple syrup","Rotten fish","Mousy smell","Garlic"], answer:0},
    {q:"Phenylketonuria (PKU) produces urine with what odor?", options:["Rancid butter","Mousy","Sweaty feet","Sulfur"], answer:1},
    {q:"Tyrosinemia is associated with urine odor resembling:", options:["Sulfur","Sweaty feet","Rancid butter","Garlic"], answer:2},
    {q:"Isovaleric acidemia produces urine with what odor?", options:["Sweaty feet or cheesy smell","Mousy","Cabbage-like","Rotting fish"], answer:0},
    {q:"Methionine malabsorption may cause urine odor resembling:", options:["Cabbage or hops","Garlic","Rotten fish","Onion"], answer:0},
    {q:"Trimethylaminuria produces urine with what odor?", options:["Rotten fish","Garlic","Sweaty feet","Rancid butter"], answer:0},
    {q:"Contamination of urine with bleach or semen may cause which odor?", options:["Sulfur","Foul","Aromatic","Chlorine-like"], answer:3},
    {q:"Which urine odor is typically associated with cystine disorders?", options:["Fruity","Sulfur","Maple syrup","Garlic"], answer:1},
    {q:"Garlic or onion-like urine odor may result from:", options:["PKU","Tyrosinemia","Certain foods and drugs","UTI"], answer:2},
    {q:"The most common method for routine chemical analysis of urine is:", options:["Microscopy","Culture and sensitivity","Reagent strip testing","Titration"], answer:2},
    {q:"The reagent strip method is preferred because it is:", options:["Complicated but accurate","Simple and rapid","Rarely used in laboratories","More expensive than all other methods"], answer:1},
    {q:"Proper reagent strip technique requires:", options:["Dipping the strip into centrifuged urine","Wiping excess urine with cotton","Blotting the edge on absorbent paper","Allowing the strip to dry before reading"], answer:2},
    {q:"Reagent strips must be stored:", options:["In the freezer","In an opaque, tightly closed container with desiccant","At room temperature in sunlight","Without expiration control"], answer:1},
    {q:"Quality control for reagent strips should be performed:", options:["Once a week","Only when results are questionable","At least daily with positive and negative controls","Never necessary"], answer:2},
    {q:"Which dipstick parameter detects glucose?", options:["Double sequential enzymatic reaction","Greiss reaction","Pseudoperoxidase activity","pKa change of polyelectrolytes"], answer:0},
    {q:"Which reagent strip test detects bilirubin?", options:["Legal’s test","Diazo reaction","Ehrlich’s test","Greiss reaction"], answer:1},
    {q:"The reagent strip test for ketones is based on:", options:["Sulfosalicylic acid precipitation","Sodium nitroprusside (Legal’s test)","Picric acid reaction","Double indicator system"], answer:1},
    {q:"Which dipstick test is based on pKa change of polyelectrolytes?", options:["Protein","Blood","Specific gravity","Leukocytes"], answer:2},
    {q:"The protein test on reagent strips is based on:", options:["Double indicator system","Protein error of indicators","Diazo reaction","Greiss reaction"], answer:1},
    {q:"The blood test on reagent strips detects hemoglobin using:", options:["Pseudoperoxidase activity","Protein error of indicators","Enzyme-linked immunoassay","Osmotic lysis"], answer:0},
    {q:"Urobilinogen on dipsticks is detected by:", options:["Ehrlich’s reaction","Legal’s test","Sulfosalicylic acid","Diazo reaction"], answer:0},
    {q:"Nitrite detection on reagent strips is based on:", options:["Double indicator system","Greiss reaction","Protein error of indicators","Sodium nitroprusside"], answer:1},
    {q:"Leukocyte esterase on dipsticks indicates:", options:["Pyuria","Hematuria","Proteinuria","Ketonuria"], answer:0},
    {q:"The normal range for random urine pH is:", options:["2–4","4–8","8–10","10–12"], answer:1},
    {q:"The reagent strip test for pH uses which indicators?", options:["Phenolphthalein and bromocresol green","Bromthymol blue and methyl red","Nitrophenol and eosin","Cresol red and methyl orange"], answer:1},
    {q:"Highly alkaline urine may cause which false result on protein testing?", options:["False negative","False positive","No effect","Neutral result"], answer:1},
    {q:"Which protein is the major normal urinary protein?", options:["Tamm-Horsfall protein","Albumin","Immunoglobulins","Microglobulins"], answer:1},
    {q:"Clinical proteinuria is usually defined as protein excretion greater than:", options:["10 mg/dL","30 mg/dL","100 mg/dL","200 mg/dL"], answer:1},
    {q:"Pre-renal proteinuria may occur due to:", options:["Glomerular damage","Muscle injury or hemolysis","Lower UTI","Tubular dysfunction"], answer:1},
    {q:"Bence Jones protein is characteristic of:", options:["Fanconi syndrome","Multiple myeloma","Gout","Diabetes mellitus"], answer:1},
    {q:"Orthostatic proteinuria occurs when protein is:", options:["Present only in random urine","Present only in the first morning urine","Absent in morning but present in random urine","Constantly present in all specimens"], answer:2},
    {q:"Glucosuria occurs when blood glucose exceeds the renal threshold of:", options:["100–120 mg/dL","140–150 mg/dL","160–180 mg/dL",">200 mg/dL"], answer:2},
    {q:"False-negative glucose results may occur due to:", options:["Strong oxidizers","Vitamin C (ascorbic acid)","Ketones","Bacteria"], answer:1},
    {q:"The copper reduction test (Clinitest) is used to detect:", options:["Proteins","Reducing sugars","Ketones","Bilirubin"], answer:1},
    {q:"The “pass-through” phenomenon in Clinitest occurs when glucose concentration is:", options:["<0.5 g/dL","1 g/dL",">2 g/dL",">5 g/dL"], answer:2},
    {q:"Which ketone body is NOT detected by dipstick testing?", options:["Acetoacetic acid","Acetone","Beta-hydroxybutyric acid","All are detected equally"], answer:2},
    {q:"Which condition commonly produces ketonuria?", options:["Hypertension","Starvation","UTI","Hemolytic anemia"], answer:1},
    {q:"Hematuria is best differentiated from hemoglobinuria by:", options:["Microscopic examination","Dipstick color change","Odor testing","Protein precipitation"], answer:0},
    {q:"Which confirmatory test distinguishes hemoglobin from myoglobin?", options:["Ictotest","SSA test","Blondheim’s test","Watson-Schwartz test"], answer:2},
    {q:"Bilirubinuria is clinically significant because it indicates:", options:["Early liver disease","Early kidney disease","Diabetes mellitus","Cystinuria"], answer:0},
    {q:"The confirmatory test for bilirubin in urine is:", options:["Ictotest","Clinitest","SSA test","Acetest"], answer:0},
    {q:"Urobilinogen is best tested in:", options:["First morning urine","Afternoon urine (2–4 pm)","24-hour urine","Random urine"], answer:1},
    {q:"Increased urinary urobilinogen with negative bilirubin suggests:", options:["Hemolytic disease","Bile duct obstruction","Liver cirrhosis","Starvation"], answer:0},
    {q:"The Watson-Schwartz test differentiates:", options:["Urobilinogen from porphobilinogen","Ketones from glucose","Protein types","Bilirubin from urobilinogen"], answer:0},
    {q:"The Hoesch test is used for rapid screening of:", options:["Ketones","Porphobilinogen","Glucose","Bilirubin"], answer:1},
    {q:"The nitrite test is a rapid screen for:", options:["Urinary tract infection","Renal failure","Diabetes mellitus","Glomerulonephritis"], answer:0},
    {q:"A negative nitrite test does not always rule out UTI because:", options:["Some bacteria do not reduce nitrate","Dipstick sensitivity is too high","Nitrite reacts only with proteins","Nitrite is unstable in urine"], answer:0},
    {q:"The leukocyte esterase test detects:", options:["Lysed RBCs","WBC activity","Bacteria","Crystals"], answer:1},
    {q:"Which condition would show positive leukocyte esterase but negative nitrite?", options:["Infection with nitrate-reducing bacteria","Infection with non–nitrate-reducing bacteria","Hematuria without infection","Ketosis"], answer:1}
  ],
  quiz2: [
    {q: "Placeholder Q1 - Quiz 2", options:["A","B","C","D"], answer:0},
    {q: "Placeholder Q2 - Quiz 2", options:["A","B","C","D"], answer:1},
    {q: "Placeholder Q3 - Quiz 2", options:["A","B","C","D"], answer:2},
  ],
  quiz3: [
    {q: "Placeholder Q1 - Quiz 3", options:["A","B","C","D"], answer:0},
    {q: "Placeholder Q2 - Quiz 3", options:["A","B","C","D"], answer:1},
  ]
};

let currentQuiz = [];
let currentPage = 0;
let userAnswers = [];

function startQuiz(quizName) {
  currentQuiz = quizzes[quizName];
  currentPage = 0;
  userAnswers = new Array(currentQuiz.length).fill(null);

  document.getElementById("quizSelect").style.display = "none";
  document.getElementById("quizScreen").style.display = "block";

  showPage();
}

function showPage() {
  let start = currentPage * 5;
  let end = Math.min(start + 5, currentQuiz.length);
  let questionsHTML = "";

  for (let i = start; i < end; i++) {
    let q = currentQuiz[i];
    questionsHTML += `<div class="question"><p><b>Q${i+1}:</b> ${q.q}</p>`;
    q.options.forEach((opt, idx) => {
      let checked = userAnswers[i] === idx ? "checked" : "";
      questionsHTML += `
        <label class="option">
          <input type="radio" name="q${i}" value="${idx}" ${checked}
          onchange="selectAnswer(${i}, ${idx})">
          ${opt}
        </label>`;
    });
    questionsHTML += "</div>";
  }

  document.getElementById("questionsArea").innerHTML = questionsHTML;
  document.getElementById("progress").textContent =
    `Page ${currentPage+1} of ${Math.ceil(currentQuiz.length/5)}`;
}

function selectAnswer(qIndex, ansIndex) {
  userAnswers[qIndex] = ansIndex;
}

function nextPage() {
  if ((currentPage+1) * 5 < currentQuiz.length) {
    currentPage++;
    showPage();
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    showPage();
  }
}

function finishQuiz() {
  let score = 0;
  let reviewHTML = "";

  currentQuiz.forEach((q, idx) => {
    let correct = q.answer === userAnswers[idx];
    if (correct) score++;

    reviewHTML += `<p><b>Q${idx+1}:</b> ${q.q}<br>
      Your answer: ${userAnswers[idx] !== null ? q.options[userAnswers[idx]] : "No answer"}<br>
      Correct answer: ${q.options[q.answer]}<br>
      <span style="color:${correct ? 'green':'red'}">${correct ? 'Correct':'Wrong'}</span>
      </p>`;
  });

  document.getElementById("quizScreen").style.display = "none";
  document.getElementById("resultScreen").style.display = "block";
  document.getElementById("score").textContent = `You scored ${score} / ${currentQuiz.length}`;
  document.getElementById("review").innerHTML = reviewHTML;
}

function restartQuiz() {
  document.getElementById("resultScreen").style.display = "none";
  document.getElementById("quizSelect").style.display = "block";
}

function exitQuiz() {
  document.getElementById("quizScreen").style.display = "none";
  document.getElementById("quizSelect").style.display = "block";
}
