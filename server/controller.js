module.exports = {

    getPlant: (req, res) => {
        const plants = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        let randomIndex = Math.floor(Math.random() * plants.length);
        let randomPlant = plants[randomIndex];
      
        res.status(200).send(randomPlant);
    }

}