import { AuthorHeading, BlogWrapper, TitleHeading, 
        SubHeading, TitleRow, Image, ImageColumn, Paragraph, ParagraphGroup } from "./BlogStyles.js";


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
                <TitleHeading>{title}</TitleHeading> 
                <SubHeading>{"Urban Planners Watch Out!"}</SubHeading>
                <SubHeading>{"The Humble Slime Mold Is Ready to Steal Your Jobs"}</SubHeading>
                <AuthorHeading>{author}</AuthorHeading>
                <Image src={process.env.PUBLIC_URL + '/assets/blogs/' + img} alt="Fungi City Infrastructure"/>
            </TitleRow>

        </BlogWrapper>

     </>
    )
}




