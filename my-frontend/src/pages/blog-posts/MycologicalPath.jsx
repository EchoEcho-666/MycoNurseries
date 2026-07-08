import { AuthorHeading, BlogWrapper, TitleHeading, 
        SubHeading, TitleRow, ReferenceHeading, Image, Reference, Bar, Paragraph, ParagraphGroup, 
        ImageCaption, BodyRow, Image60, Ref} from "./BlogStyles.js";


const descr = `
   Cleaning Polluted Waters, with the Help of Fungus 
`;

//Metadata
const slug = "A Mycological Path Towards Cleaner Waters";
const title = "A Mycological Path Towards Cleaner Waters";
const img = "MycologicalPath/water_flowing_pipe_card.jpg";
const date = "July 7, 2026";
const author = "Fah Michaud"

//Chapter 1.
const subHeading1 = "I.  Groundwater, the Hidden Ally"
const paragrah1 = `As time goes on, access to clean water is only becoming more uncertain. Much of our planet is covered in blue waters, but only a small fraction of those waters is actually potable (or drinkable) freshwater. The rest is seawater, which is not very useful when it comes to humanity’s liquid needs. You can’t water crops with saltwater, and you certainly shouldn’t be drinking it.`
const paragraph2 = (
    <> This is where groundwater comes in. Groundwater refers to water that, unsurprisingly, is stored in the subsurface. It is water that percolates into soil through precipitation-based processes such as rainfall, and fills openings within rocks or unconsolidated grains of sediments.<Ref n={6} /> </>
);
const paragraph3 = (
    <> Just as groundwater can be recharged by rainfall, it can also be discharged into bodies of water such as lakes, streams, or springs. As such, groundwater is a renewable resource, although its rates of recharge can be slow and vary significantly regionally and by the change of the seasons.<Ref n={6} /> Renewal rates aside, groundwater is also extremely abundant, making up more than 90% of the planet’s freshwater resources, excluding polar ice caps.<Ref n={6} /> Although surface water bodies such as lakes may be the poster children for fresh, valuable water, they only make up about 3% of the planet’s freshwater.<Ref n={6} /> </>
);
const paragraph4 = (
    <> Because of its abundance and our inherent reliance on freshwater, groundwater is invaluable when it comes to its ability to buffer the effects of climate change.<Ref n={9} /> In some regions, groundwater flows from humid regions to more arid (dry) regions, which can significantly reduce the agricultural yield losses that result from periods of drought by providing irrigation even without rain.<Ref n={9} /> The ability to access groundwater in itself as an alternative source of freshwater outside of surface water bodies improves food security and reduces rates of malnutrition, as food security is highly dependent on freshwater availability.<Ref n={9} /> As a result, arid regions and major agricultural centers are highly reliant on groundwater, including South Asia, the Middle East, North Africa, North America, and countless other areas.<Ref n={8} /> </>
);

//Chapter 2.
const subHeading2 = "II.  Threats Against Our Groundwater Resources"
const paragraph5 = (
    <> As with surface freshwater resources, groundwater is not immune to external factors that threaten its viability. Namely, contamination. In Canada, recent groundwater contamination incidents have brought more public attention to this problem.<Ref n={3} /> One of the most well-known incidents of groundwater contamination occurred in a small town called Walkerton, Ontario, where the town’s groundwater supply came in contact with cattle manure, contaminating residents’ drinking water with E. coli.<Ref n={3} /> This contamination resulted in more than 2,000 residents falling ill and the death of at least seven individuals, making the incident the worst public health disaster involving municipal drinking water in Canadian history.<Ref n={7} /> The public inquiry that followed found that the Ministry of the Environment had noted significant concerns regarding contamination risks two years before the incident, but that no changes were made.<Ref n={7} /> Voluntary guidelines, not legally-binding regulations, had governed water safety back then.<Ref n={7} /> Improper safety practices, systemic frauds, and many other factors contributed to the occurrence of this tragedy.<Ref n={7} /> </>
);
const paragraph6 = (
    <> Apart from agricultural contaminants, groundwater can be polluted by a variety of other sources, including, but not limited to: leaking storage tanks, septic systems, landfills, road salts, uncontrolled hazardous waste, and even atmospheric contaminants as they travel through the water cycle.<Ref n={4} /> But luckily for us, its possible decontamination methods are just as varied. </>
);

//Chapter 3.
const subHeading3 = "III.  Cleaning Polluted Waters, with the Help of Fungus"
const paragraph7 = (
    <> Groundwater remediation processes can be grouped into two main types: in-situ or ex-situ remediation.<Ref n={2} /> In-situ groundwater remediation refers to treating groundwater to remove its contaminants without removing it from site, so it is generally less costly.<Ref n={2} /> Meanwhile, ex-situ remediation requires removing the contaminated groundwater away from its home and treating it elsewhere, offsite.<Ref n={2} /> Ex-situ remediation methods tend to be more expensive, often prolonging the length of time needed for the full remediation process.<Ref n={2} /> On the upside, it generally prevents any further damage at the site of contamination.<Ref n={2} /> </>
);
const paragraph8 = `Before further discussing the ins and outs of groundwater and its pollution, it is important to define some terms. Firstly, the water table. The water table is essentially a boundary between the saturated zone, below which all pore spaces are filled with groundwater, and the unsaturated or vadose zone, where pore spaces are filled with both air and groundwater.`
const paragraph9 = (
    <> Groundwater can be remediated chemically, biologically, or physically.<Ref n={2} /> Physical methods of remediation include pumping out contaminated groundwater and treating it, physically removing the groundwater from the aquifer (a geologic unit whose pore spaces store groundwater), and treating it at the surface.<Ref n={2} /> This can be done through techniques such as carbon adsorption (pollutant molecules adhering to the surface of carbon) or air stripping, which transfers volatile contaminants from water into air.<Ref n={2} /> Physical methods of groundwater remediation such as these can control the migration of the contaminant plume in the subsurface, or reduce the concentration of the plume.<Ref n={2} /> </>
);
const paragraph10 = (
    <> Chemical methods of groundwater remediation generally use processes such as ion exchange, oxidation, and chemical precipitation, along with carbon adsorption.<Ref n={2} /> These methods may take longer or make remediation more costly, but may be the only option in the case of certain contaminants.<Ref n={2} /> </>
);
const paragraph11 = (
    <> Lastly, there are also biological methods of groundwater remediation. This usually entails the use of microorganisms, plants, or organic matter to treat and clean contaminated groundwater.<Ref n={2} /> This is done through biosparging (injecting pressurized air into the saturated zone below the water table to encourage aerobic microbial activity by native microorganisms), bioventing (injecting air above the water table, in the vadose zone, also to encourage microbial activity to break down contaminants), and bioaugmentation (introducing non-native strains of specialized microorganisms), using microorganisms to break down groundwater contaminants.<Ref n={2} /> The major advantage of biological methods of groundwater remediation is both cost and convenience, as the contaminated groundwater does not necessarily need to be moved off-site to be treated, so can be remediated in-situ.<Ref n={2} /> </>
);

const paragraph12 = (
    <> One emerging method of biological groundwater remediation is mycofiltration, which entails exactly what it sounds like: using fungi to treat and clean polluted groundwater, filtering out both toxins and harmful microorganisms.<Ref n={1} /> One study employed local agricultural waste containing the white-rot fungus Pleurotus tuberregium in groundwater remediation by packing the substrate in a container, then straining contaminated waters through the mycofilter.<Ref n={1} /> </>
);
const paragraph13 = (
    <> Fungi such as Pleurotus tuberregium have a hyperaccumulative ability when it comes to harmful metals, and are able to trap and digest unwanted microorganisms.<Ref n={1} /> Since they can break down a range of compounds and materials, fungi such as this white-rot fungus has been long used in environmental remediation methods, whether used for water or soils to clean-up organo-pollutants such as pesticides, synthetic dyes, preservatives, and other waste materials.<Ref n={1} /> The study found that mycofilters made from the white-rot fungus were able to effectively remove harmful heavy metals from contaminated water sources in rural communities of the Niger Delta.<Ref n={1} /> The authors had chosen the Niger Delta as a geographical study region due to its frequency of anthropogenic groundwater contamination due to oil drilling and exploration.<Ref n={1} /> In this region, as large amounts of agricultural wastes (i.e. maize cobs) are produced by farms in rural communities, the construction of mycofilters using these agricultural waste products would be a low-cost and efficient way to remediate contaminated groundwater.<Ref n={1} /> </>
);
const paragraph14 = (
    <> The clean-up mechanism of these mycofilters function in a few different ways.<Ref n={1} /> Firstly, the metal ions in drinking water can be bio-adsorbed onto the surface of the fungi, removing them from the water.<Ref n={1} /> Heavy metals can also be uptaken intracellularly, achieving a similar goal, and then can be chemically transformed by the fungi (i.e. changing their valency through redox reactions) to become insoluble and less harmful.<Ref n={1} /> </>
);
const paragraph15 = (
    <> Mycofiltration can be highly effective and is a very valuable tool for smaller-scale remediation of contaminated groundwater, especially for smaller, rural communities that may be limited by the costliness of other remediation methods.<Ref n={5} /> However, it is not without prominent research gaps, such as a lack of assessment for when the mycofilters become saturated and require replacement, or a lack of standardized methods of mycofilter preparation.<Ref n={5} /> Mycofilters are also living systems, and require special considerations when it comes to their optimal conditions, including pH or temperature. </>
);
const paragraph16 = (
    <> But once these gaps are addressed, and mycofiltration’s efficiency can be further improved and also reliably upscaled, this method can serve as both an eco-friendly and cost-effective solution to the treatment of contaminated freshwater sources, to help us provide access to cleaner, safer drinking waters for all. </>  
);

//All images
const img0 = "MycologicalPath/water_flowing_pipe.jpg"               //Title image
const caption0 = "Photo by Gowtham AGM on Unsplash"        
const img1 = "MycologicalPath/groundwater.jpg"                      //Ch. 1
const caption1 = "Photo by Francesco Ungaro on Unsplash"  
const img2 = "MycologicalPath/contaminants.jpg"                     //Ch. 2
const caption2 = "Photo by TRG on Unsplash"                 
const img3 = "MycologicalPath/contaminants2.jpg"                    //Ch. 2
const caption3 = "Photo by OSPAN ALI on Unsplash"
const img4 = "MycologicalPath/groundwater_pump.jpg"                 //Ch. 3
const caption4 = "Photo by Vedrana Filipović on Unsplash"
const img5 = "MycologicalPath/mycofilter.jpg"                       //Ch. 3
const caption5 = "Photo by M. Miglio on Unsplash"


export const postMeta = {
    slug,
    title,
    description: descr,
    img,
    date,
};

export default function Post(){
    return (
     <>
        <BlogWrapper>
            <TitleRow>
                <TitleHeading>{"A Mycological Path Towards Cleaner Waters"}</TitleHeading> 
                <Bar></Bar>
                <AuthorHeading>{author + " for MycoNurseries  ·  " + date}</AuthorHeading>
                <Image60 src={process.env.PUBLIC_URL + '/assets/blogs/' + img0} alt="water_flowing_pipe"/>
                <ImageCaption>{caption0}</ImageCaption>
            </TitleRow>
            <BodyRow>
                <ParagraphGroup>
                    <SubHeading>{subHeading1}</SubHeading>
                    <Paragraph>{paragrah1}</Paragraph>
                    <Paragraph>{paragraph2}</Paragraph>
                    <Paragraph>{paragraph3}</Paragraph>
                    <Paragraph>{paragraph4}</Paragraph>
                    <Image src={process.env.PUBLIC_URL + '/assets/blogs/' + img1} alt="groundwater"/>
                    <ImageCaption>{caption1}</ImageCaption>
                </ParagraphGroup>
                <ParagraphGroup>
                    <SubHeading>{subHeading2}</SubHeading>
                    <Paragraph>{paragraph5}</Paragraph>
                    <Image src={process.env.PUBLIC_URL + '/assets/blogs/' + img2} alt="contaminants"/>
                    <ImageCaption>{caption2}</ImageCaption>
                    <Paragraph>{paragraph6}</Paragraph>
                    <Image60 src={process.env.PUBLIC_URL + '/assets/blogs/' + img3} alt="contaminants2"/>
                    <ImageCaption>{caption3}</ImageCaption>
                </ParagraphGroup>
                <ParagraphGroup>
                    <SubHeading>{subHeading3}</SubHeading>
                    <Paragraph>{paragraph7}</Paragraph>
                    <Paragraph>{paragraph8}</Paragraph>
                    <Image src={process.env.PUBLIC_URL + '/assets/blogs/' + img4} alt="groundwater_pump"/>
                    <ImageCaption>{caption4}</ImageCaption>
                    <Paragraph>{paragraph9}</Paragraph>
                    <Paragraph>{paragraph10}</Paragraph>
                    <Paragraph>{paragraph11}</Paragraph>
                    <Paragraph>{paragraph12}</Paragraph>
                    <Image60 src={process.env.PUBLIC_URL + '/assets/blogs/' + img5} alt="mycofilter"/>
                    <ImageCaption>{caption5}</ImageCaption>
                    <Paragraph>{paragraph13}</Paragraph>
                    <Paragraph>{paragraph14}</Paragraph>
                    <Paragraph>{paragraph15}</Paragraph>
                    <Paragraph>{paragraph16}</Paragraph>

                    <Bar></Bar>
                    <ReferenceHeading></ReferenceHeading>
                    <AuthorHeading>References</AuthorHeading>
                    <Reference>1. Akpaj, E. O., and D. I. Olorunfemi. “Mycofiltration Effectiveness in Bioremediation of Contaminated Drinking Water Sources.” Ife Journal of Science, vol. 16, no. 3, 2014, pp. 533–43, https://doi.org/10.4314/ijs.v16i3.</Reference>
                    <Reference>2. Burton, Rachael. “A Comprehensive Guide to Groundwater Remediation.” Www.hcr-Llc.com, 21 Sept. 2021, www.hcr-llc.com/blog/a-comprehensive-guide-to-groundwater-remediation.</Reference>
                    <Reference>3. Government of Canada. “Water Sources: Groundwater - Canada.ca.” Canada.ca, 2013, www.canada.ca/en/environment-climate-change/services/water-overview/sources/groundwater.html.</Reference>
                    <Reference>4. Groundwater Foundation. “Groundwater Contamination.” The Groundwater Foundation, 2022, groundwater.org/threats/contamination/.</Reference>
                    <Reference>5. Mnkandla, Sanele Michelle, and Patricks Voua Otomo. “Mycofilters and the Effectiveness of Mycofiltration in the Removal of Contaminants in Water—a Systematic Review.” Journal of Fungi, vol. 12, no. 5, May 2026, p. 376, https://doi.org/10.3390/jof12050376. Accessed 18 May 2026.</Reference>
                    <Reference>6. National Ground Water Association. “Groundwater | Groundwater Fundamentals.” Www.ngwa.org, www.ngwa.org/what-is-groundwater/About-groundwater. Accessed 16 May 2026.</Reference>
                    <Reference>7. Salvadori, Marina I., et al. “Factors That Led to the Walkerton Tragedy.” Kidney International, vol. 75, no. 1, Feb. 2009, pp. S33–34, https://doi.org/10.1038/ki.2008.616.</Reference>
                    <Reference>8. United Nations Educational, Scientific and Cultural Organization. “Groundwater Uses and Benefits | UN World Water Development Report 2022.” Www.unesco.org, 20 Apr. 2023, www.unesco.org/reports/wwdr/2022/en/benefits.</Reference>
                    <Reference>9. World Bank Group. “The Hidden Wealth of Nations: Groundwater in Times of Climate Change.” World Bank Group, 14 June 2023, www.worldbank.org/en/topic/water/publication/the-hidden-wealth-of-nations-groundwater-in-times-of-climate-change. Accessed 16 May 2026.</Reference>
                </ParagraphGroup>
            </BodyRow>
        </BlogWrapper>

     </>
    )
}




