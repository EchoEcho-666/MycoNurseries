const descr = `
    A great description that is indeed extremely long and convoluted in order to test the maximum size 
    of the string. Badger Badger Badger Badger Badger Badger Badger Badger MUSHROOM MUSHROOM Badger Badger
    Badger Badger Badger Badger Badger Badger PANIC A SNAKE! OHH ITS A SNAKE!
`;

export const postMeta = {
    slug: "blog2Silly",
    title: "Fungi City Infrastructure",
    description: descr,
    img: "FungiCityInfrastructure.jpg",
    date: "date",
};



export default function Post(){
    return (
     <>
        <p>This is a normal react blog post.</p>
     </>
    );
}




