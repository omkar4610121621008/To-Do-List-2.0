const { User, Task } = require("../models")
const { db } = require("./db");


async function seed (){

    await db.sync({ force: true })

    await User.bulkCreate([
        {
            username: "Tom Holland"
        },
        {
            username: "Moses"
        },
        {
            username: "Omkar Watkinson"
        }
    ])


    await Task.bulkCreate([
        {
            description: "The flavor power of parmesan can take a savory dish from acceptable to amazing with a dusting of this delicious cheese. Lots of words are used to describe parmesan: rich, tangy, nutty, sharp, complex, fruity, and bold to name a few. It has a somewhat gritty texture and a strong umami taste."
        },
        {
            description: "The texture is slightly buttery, moist, and a little melty. It's truly a versatile crowd-pleaser. Aged cheddars become more nutty, crumbly, and sharp. During the aging process the cheese develops a slightly tangier finish, some earthy notes, and some hard salt-like crystals that add a slight crunch to each bite."
        },
        {
            description: "Mozzarella is a plastic or stretched-curd cheese; the curd is mixed with heated whey and stretched and kneaded until it attains a smooth, pliable consistency. It is then molded into spheres or ovals and stored in water to keep it moist."
        },
        {
            description: "Incredibly rich and creamy, the flavours of this cheese are sweet and pungent, unveiling tones of butter and roasted nuts as it lingers on your palate. Traditionally made from unpasteurised milk, the texture is semi hard, smooth and adorned with small eyes in the body."
        }
    ])

}

seed()