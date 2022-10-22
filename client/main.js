const plantBtn = document.getElementById("plantButton")

const getPlant = () => {
    axios.get("http://localhost:4000/api/plant/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

plantBtn.addEventListener('click', getPlant)