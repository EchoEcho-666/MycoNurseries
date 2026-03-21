import { AuthorHeading, BlogWrapper, TitleHeading, 
        SubHeading, TitleRow, ReferenceHeading, Image, ImageColumn, Reference, Bar, Paragraph, ParagraphGroup, ImageCaption, BodyRow } from "./BlogStyles.js";


const descr = `
    A great description that is indeed extremely long and convoluted in order to test the maximum size 
    of the string. Badger Badger Badger Badger Badger Badger Badger Badger MUSHROOM MUSHROOM Badger Badger
    Badger Badger Badger Badger Badger Badger PANIC A SNAKE! OHH ITS A SNAKE!
`;

const slug = "FungiCityInfrastructure";
const title = "Fungi City Infrastructure";
const img = "FungiCityInfrastructure.jpg";
const date = "date";
const author = "Fah Michaud"

const caption1 = "Photo by Andrew Ridley on Unsplash"
const paragrah1 = "When you walk through a city, do you ever stop to think about its layout? Or do you just troll about on your usual routes to school or work, without the thought of urban morphology having ever crossed your mind? I don’t know about you, but I know that’s what I tend to do. I mean, it's not really my job. I leave all of that to the urban planners: the real professionals in the world of city layouts."
const paragraph2 = "But what if I told you that human urban planners aren’t the only ones who can plan a city? And that they’ve never actually been the only ones who know how to do it…?"
const paragraph3 = "Urban planners beware! Just like how AI is coming for all those poor artists’ jobs, the humble slime mold is coming for yours!"
const paragraph4 = "How is this even possible, you may be asking. What even is a slime mold?"
const paragraph5 = "Well, I’m glad you asked!"
const paragraph6 = "The slime mold’s name is rather misleading in nature. Although it is made up of the two words ‘slime’ and ‘mold’, slime molds have little relation to the slime you made at home as a kid after watching a few dozen videos on the internet, nor do they have any relation to mold. Slime molds are not molds, and they are not fungi. They are, in fact, more closely-related to amoebas, and are classified as amoeboid protists.1 Some well-known amoeboid protists include foraminifera, which are one of the most important types of microfossils. "
const img1 = "close_up_of_a_crab.jpg"
const caption2 = "Photo by Thomas Ho on Unsplash"
const img2 = "toy_figurines.jpg"
const caption3 = "Photo by Lia Chuang on Unsplash"
const img3 = "man_holding_magnifying_glass.jpg"
const caption4 = "Photo by National Cancer Institute on Unsplash"
const img4 = "printing_papers.jpg"
const caption5 = "Photo by Marvin Meyer on Unsplash"
const img5 = "pink_mushroom.jpg"
const caption6 = "Photo by Timothy Dykes on Unsplash"

/*
const paragraph8
const paragraph9
const paragraph10
const paragraph11
const paragraph12
const paragraph13
const paragraph14
const paragraph15
const paragraph16
const paragraph17
const paragraph18
const paragraph19
const paragraph20
const paragraph21
const paragraph22
const paragraph23
const paragraph24
const paragraph
const paragraph
const paragraph
const paragraph
const paragraph
const paragraph
*/




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
                <TitleHeading>{"Urban Planners Watch Out!"}</TitleHeading> 
                <SubHeading>{"The Humble Slime Mold Is Ready to Steal Your Jobs"}</SubHeading>
                <AuthorHeading>{author}</AuthorHeading>
                <Image src={process.env.PUBLIC_URL + '/assets/blogs/' + img} alt="Fungi City Infrastructure"/>
                <ImageCaption>{caption1}</ImageCaption>
            </TitleRow>

            <BodyRow>
                <ParagraphGroup>
                    <Paragraph>{paragrah1}</Paragraph>
                    <Paragraph>{paragraph2}</Paragraph>
                    <Paragraph>{paragraph3}</Paragraph>
                    <Paragraph>{paragraph4}</Paragraph>
                    <Paragraph>{paragraph5}</Paragraph>
                    <Image src={process.env.PUBLIC_URL + '/assets/blogs/' + img1} alt="Close up of a Crab"/>
                    <ImageCaption>{caption2}</ImageCaption>
                </ParagraphGroup>
                <ParagraphGroup>
                    <Paragraph>The slime mold’s name is rather misleading in nature. Although it is made up of the two words ‘slime’ and ‘mold’, slime molds have little relation to the slime you made at home as a kid after watching a few dozen videos on the internet, nor do they have any relation to mold. Slime molds are not molds, and they are not fungi. They are, in fact, more closely-related to amoebas, and are classified as amoeboid protists.<sup>1</sup> Some well-known amoeboid protists include foraminifera, which are one of the most important types of microfossils.</Paragraph>
                    <Paragraph>‘True’ slime molds are a part of the Myxomycetes class, which includes about a thousand species that can be found in all sorts of terrestrial ecosystems.<sup>1</sup> These little things love temperate and tropical forests (just like me!), but some of them also adapt to live in extreme environments, where, along with bacteria and yeast, they make up quite a wonderfully strange biota.<sup>1</sup></Paragraph>
                    <Paragraph>An important difference between slime molds and fungi lies in the way they eat. Fungi (including molds) are decomposers that digest food externally. They are multicellular organisms with cell walls, as opposed to slime molds, which are generally unicellular (hence being protists), and oftentimes have no cell walls.<sup>1</sup> Like other protists, they tend to engulf their food through a process called phagocytosis. Fungi and slime molds are actually so different that they aren’t even in the same kingdom. Fungi are in the appropriately-named Fungi kingdom, whilst slime molds are a part of the Protista kingdom.</Paragraph>
                    <Paragraph>Myxomycetes (plasmodial slime molds), dictyostelids (cellular slime molds or social amoeba), and protostelids are all included in the Amoebozoa group.<sup>1</sup> This group is of no small significance to evolutionary biologists, as it's seen as a part of the evolution of organisms towards multicellularity, based on its position in the tree of life.<sup>1</sup> Apart from all that, they also know how to plan cities!</Paragraph>
                    <Paragraph>Now, what do I mean when I say that slime molds know how to plan cities? It’s important to note that I don’t mean they ‘know’ how to plan cities in the same way that you and I know that we need to brush our teeth before we go to bed or eat three meals a day every single day. </Paragraph>
                    <Paragraph>Unlike us, slime molds do not possess true cognition.<sup>5</sup> They are more like active living substrates which function through automated biochemical mechanisms that urge them to reach for food, or reproduce to keep passing on their genetic material, somewhat like pre-programmed robots.<sup>5</sup> It’s why technological optimists like to quote them as an allegory for the capabilities of artificial intelligence.<sup>2</sup> As far as we know, slime molds have no thoughts, no emotions, and they do not form relationships with other unicellular slime molds in the same way that we could fall in love, or start a family or a petty fight, with another human being. </Paragraph>
                    <Image src={process.env.PUBLIC_URL + '/assets/blogs/' + img2} alt="Close up of a Crab"/>
                    <ImageCaption>{caption3}</ImageCaption>
                </ParagraphGroup>
                <ParagraphGroup>
                    <Paragraph>Slime molds are brainless. They are single-celled amoeboid protists.<sup>2</sup> By that definition, you might think they must not be able to do much to blow you away. You might start to wonder whether you need to call the extermination guy to get rid of any slime molds slinking around your place (spoilers: you probably don’t…slime molds are harmless, but they do indicate possible conditions of excessive moisture in your living space, which are conducive to the growth of true molds, which are indeed bad for your little human lungs). Regardless of their lack of a brain, there is so much we can learn from this under-exposed and under-sized branch in the great tree of life on our beautiful planet.</Paragraph>
                    <Paragraph>Slime molds can do really cool things, like finding the quickest way out of a maze to reach a piece of food.<sup>2</sup> There was a Japanese study in 2010 where researchers put a Physarum slime mold on an agar plate, and put some oak flakes in the geographical positions of actual cities around Tokyo.<sup>2</sup> The researchers’ slime mold then grew into a network that surprisingly resembled the actual rail map in Japan.<sup>2</sup> The Physarum slime molds look like greenish, yellowish veins that spread out in a system of tubular-looking networks.<sup>3</sup> Their system is organized so that nutrient delivery throughout the entire organism is optimized.<sup>3</sup> </Paragraph>
                    <Image src={process.env.PUBLIC_URL + '/assets/blogs/' + img3} alt="Close up of a Crab"/>
                    <ImageCaption>{caption4}</ImageCaption>
                </ParagraphGroup>
                <ParagraphGroup>
                    <Paragraph>Unfortunately, no one gave a city planning job to that Physarum slime mold, since there was nothing to plan! The rail system and its map already existed, so all those tiny guys were confirming was that the human urban planners and civil engineers were right (....and maybe their jobs won’t be stolen by slime molds after all).</Paragraph>
                    <Paragraph>The way slime molds operate is not centralized. In the case of the maze and the oat flakes, the slime molds would be sending out a lot of tendrils in a “speculative” manner, until one finally found the oat flakes and would send back affirmative signals, strengthening the network in the right direction.<sup>2</sup></Paragraph>
                    <Paragraph>This is a type of bottoms-up operation completely different from the way that we humans operate (i.e. through our brains as the CEO of the body and its many parts)—hence why people compare them to artificial intelligence. They derive information from many different places in a non-centralized, brainless manner, but yet when looking at the whole, things appear to fit together well enough (provided that you don’t inspect some things too closely). To us, the slime molds appear to be expert problem solvers, efficient in achieving their goals to quench the biological drive for food. But to them, there exists not a single inkling of sentience nor awareness regarding the tasks we give them. They never think, I’m so hungry. Let’s build a network to reach for some food! They just go at it.</Paragraph>
                    <Paragraph>Raphael Kay, from the University of Toronto’s Faculty of Applied Science & Engineering, brings up an interesting point. He says, “In architecture school, we were taught by human architects the lessons of past human architecture.”<sup>3</sup> That’s how we, as a species, learn. But slime molds aren’t like us. They don’t teach each other what to do and what not to do when growing out and spreading their networks in a classroom setting. They’ve been “shaped by hundreds of millions of years of evolution”, and so are “far more experienced at solving certain architectural problems than we humans could ever be”.<sup>3</sup></Paragraph>
                    <Paragraph>He’s got a pretty good point. </Paragraph>
                    <Image src={process.env.PUBLIC_URL + '/assets/blogs/' + img4} alt="Close up of a Crab"/>
                    <ImageCaption>{caption5}</ImageCaption>
                </ParagraphGroup>
                <ParagraphGroup>
                    <Paragraph>All this time, humans have been wracking our brains, trying to optimize this and that for this and that since the dawn of time. Meanwhile, a simpler solution has been sitting here the entire time—sometimes quite literally under our feet, if you happen to step on some Physarum polycephalum by accident. </Paragraph>
                    <Paragraph>Instead of trying to look inwards and solve the many urban planning issues through human pathways, perhaps it’s time to look outwards and into the natural world, where organisms like slime molds have gone through an innumerable amount of years of evolution to specialize in this exact function. </Paragraph>
                    <Paragraph>Not only can slime molds assist humans in things like optimizing railway systems, but they can also be studied for other important applications such as planning optimal routes for reaching hospitals in urban areas.<sup>4</sup> Some researchers have also attempted to create computer models to mimic and simulate the way that slime molds construct their networks, validated through the study of actual slime molds on agar plates with oatmeal.<sup>3</sup> The networks that the computer model made were evaluated based on three factors: 1) cost, which is a function of the overall length of all segments, 2) mean travel time, which is the average length between any two points, and 3) vulnerability, which is the average increase in travel time caused by the removal of a segment.<sup>3</sup> </Paragraph>
                    <Paragraph>The researchers found a fairly high correlation between the computer model and real slime molds.<sup>3</sup> The model’s networks only had about a 4% deviation from networks constructed by real-life slime molds.<sup>3</sup> </Paragraph>
                    <Paragraph>(Sounds to me like it’s time to throw in the towel and start dishing out jobs to the amoeboids…!)</Paragraph>
                    <Paragraph>All this only goes to show the vast volumes of knowledge and wisdom the natural world holds, if only we widened our perspectives (or perhaps narrowed down our view to see the humble slime mold, in this case), and let ourselves watch and learn.</Paragraph>
                    <Paragraph>The answers you seek may be found in the most unusual of places.</Paragraph>
                    <Image src={process.env.PUBLIC_URL + '/assets/blogs/' + img5} alt="Close up of a Crab"/>
                    <ImageCaption>{caption6}</ImageCaption>
                    <Bar></Bar>
                    <ReferenceHeading></ReferenceHeading>
                    <AuthorHeading>References</AuthorHeading>
                    <Reference>1. De Mier, Carlos. “Myxomycetes.” Myxotropic, www.myxotropic.org/myxomycetes/. Accessed 11 Jan. 2026.</Reference>
                    <Reference>2. Glaser, Eliane. “Slime Mould versus the People.” Engelsberg Ideas, 19 Sept. 2025, engelsbergideas.com/essays/slime-mould-versus-the-people/. Accessed 11 Jan. 2026.</Reference>
                    <Reference>3. Irving, Tyler. “Researchers Use ‘Virtual Slime Mould’ to Design a TTC Subway Network Less Prone to Disruption.” University of Toronto, 26 Jan. 2022, www.utoronto.ca/news/researchers-use-virtual-slime-mould-design-ttc-subway-network-less-prone-disruption.</Reference>
                    <Reference>4. Tan, Gangyi, et al. “Biomimetic Method of Emergency Life Channel Urban Planning in Wuhan Using Slime Mold Networks.” Heliyon, vol. 9, no. 6, June 2023, p. e17042, https://doi.org/10.1016/j.heliyon.2023.e17042.</Reference>
                    <Reference>5. Vallverdú, Jordi, et al. “Slime Mould: The Fundamental Mechanisms of Biological Cognition.” Biosystems, vol. 165, Mar. 2018, pp. 57–70, https://doi.org/10.1016/j.biosystems.2017.12.011.</Reference>
                </ParagraphGroup>
            </BodyRow>
        </BlogWrapper>

     </>
    )
}




