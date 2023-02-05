function startai(){

    const geonetcountryai = new brain.NeuralNetwork()

    var dateidh = document.getElementById("input-idh").value;
    var dateinf = document.getElementById("input-inf").value / 100;
    var dateidc = document.getElementById("input-idc").value / 100;
    var dateedv = document.getElementById("input-edv").value / 100;
    var dateids = document.getElementById("input-ids").value / 100;

    const datos = [
        // Paises desarrollados
        {"input": {"idh": 0.924, "inf": 0.023, "idc": 0.73, "edv": 0.78, "ids": 0.68}, "output": {"Developed country.": 1}},
        {"input": {"idh": 0.923, "inf": -0.003, "idc": 0.79, "edv": 0.84, "ids": 0.67}, "output": {"Developed country.": 1}},
        {"input": {"idh": 0.923, "inf": 0.012, "idc": 0.80, "edv": 0.80, "ids": 0.68}, "output": {"Developed country.": 1}},
        {"input": {"idh": 0.923, "inf": 0.004, "idc": 0.87, "edv": 0.83, "ids": 0.67}, "output": {"Developed country.": 1}},
        {"input": {"idh": 0.922, "inf": 0.009, "idc": 0.77, "edv": 0.80, "ids": 0.68}, "output": {"Developed country.": 1}},
        {"input": {"idh": 0.922, "inf": 0.012, "idc": 0.76, "edv": 0.81, "ids": 0.68}, "output": {"Developed country.": 1}},
        {"input": {"idh": 0.922, "inf": 0.016, "idc": 0.86, "edv": 0.82, "ids": 0.68}, "output": {"Developed country.": 1}},
        {"input": {"idh": 0.922, "inf": 0.020, "idc": 0.76, "edv": 0.81, "ids": 0.69}, "output": {"Developed country.": 1}},
        {"input": {"idh": 0.921, "inf": 0.007, "idc": 0.76, "edv": 0.83, "ids": 0.65}, "output": {"Developed country.": 1}},
        {"input": {"idh": 0.918, "inf": 0.014, "idc": 0.65, "edv": 0.82, "ids": 0.66}, "output": {"Developed country.": 1}},

        //Paises en vias de desarrollo
        {"input": {"idh": 0.664, "inf": 0.065, "idc": 0.40, "edv": 0.69, "ids": 0.70}, "output": {"Developing country.": 1}},
        {"input": {"idh": 0.758, "inf": 0.025, "idc": 0.40, "edv": 0.75, "ids": 0.80}, "output": {"Developing country.": 1}},
        {"input": {"idh": 0.694, "inf": 0.050, "idc": 0.30, "edv": 0.70, "ids": 0.75}, "output": {"Developing country.": 1}},
        {"input": {"idh": 0.758, "inf": 0.080, "idc": 0.40, "edv": 0.75, "ids": 0.70}, "output": {"Developing country.": 1}},
        {"input": {"idh": 0.761, "inf": 0.040, "idc": 0.30, "edv": 0.75, "ids": 0.70}, "output": {"Developing country.": 1}},
        {"input": {"idh": 0.684, "inf": 0.035, "idc": 0.30, "edv": 0.70, "ids": 0.75}, "output": {"Developing country.": 1}},
        {"input": {"idh": 0.699, "inf": 0.030, "idc": 0.30, "edv": 0.75, "ids": 0.75}, "output": {"Developing country.": 1}},
        {"input": {"idh": 0.668, "inf": 0.120, "idc": 0.30, "edv": 0.70, "ids": 0.75}, "output": {"Developing country.": 1}},
        {"input": {"idh": 0.742, "inf": 0.290, "idc": 0.30, "edv": 0.70, "ids": 0.75}, "output": {"Developing country.": 1}},
        {"input": {"idh": 0.758, "inf": 0.070, "idc": 0.30, "edv": 0.75, "ids": 0.75}, "output": {"Developing country.": 1}},
        
        // Paises subdesarrollados
        {"input": {"idh": 0.541, "inf": 0.28, "idc": 0.20, "edv": 0.57, "ids": 0.31}, "output": {"Underdeveloped country.": 1}},
        {"input": {"idh": 0.474, "inf": 0.34, "idc": 0.30, "edv": 0.52, "ids": 0.40}, "output": {"Underdeveloped country.": 1}},
        {"input": {"idh": 0.486, "inf": 0.47, "idc": 0.20, "edv": 0.65, "ids": 0.55}, "output": {"Underdeveloped country.": 1}},
        {"input": {"idh": 0.458, "inf": 0.25, "idc": 0.30, "edv": 0.60, "ids": 0.30}, "output": {"Underdeveloped country.": 1}},
        {"input": {"idh": 0.439, "inf": 0.35, "idc": 0.30, "edv": 0.60, "ids": 0.40}, "output": {"Underdeveloped country.": 1}},
        {"input": {"idh": 0.470, "inf": 0.47, "idc": 0.30, "edv": 0.60, "ids": 0.50}, "output": {"Underdeveloped country.": 1}},
        {"input": {"idh": 0.515, "inf": 0.27, "idc": 0.30, "edv": 0.65, "ids": 0.30}, "output": {"Underdeveloped country.": 1}},
        {"input": {"idh": 0.475, "inf": 0.36, "idc": 0.20, "edv": 0.60, "ids": 0.35}, "output": {"Underdeveloped country.": 1}},
        {"input": {"idh": 0.509, "inf": 0.33, "idc": 0.20, "edv": 0.65, "ids": 0.45}, "output": {"Underdeveloped country.": 1}},
        {"input": {"idh": 0.527, "inf": 0.14, "idc": 0.20, "edv": 0.65, "ids": 0.25}, "output": {"Underdeveloped country.": 1}},
        
    ];

    geonetcountryai.train(datos);

    var resultado = brain.likely({"idh": dateidh, "inf": dateinf, "idc": dateidc, "edv": dateedv, "ids": dateids}, geonetcountryai);

    var sound = new Audio("notification-sound-7062.mp3");
    sound.play();

    var takeconsole = document.querySelector(".console");
    var result = document.createElement("p");
    result.innerHTML = "➣ "+ resultado + " (HDI: "+dateidh+ ", INF: "+dateinf*100+ ", CI: "+dateidc*100+ ", LE: "+dateedv*100+ ", SI: "+dateids*100+")";
    takeconsole.appendChild(result);

}

function des(){
    var welcome = document.getElementById("userwelcome");
    welcome.className = "ocult";

    var contain = document.getElementById("redcontent");
    contain.className = "neuralcontent";
}

window.onload = setTimeout(des, 5000);

function ocult1(){
    document.getElementById("filesbar").className = "";
    document.getElementById("testdatabar").className = "ocult";
    document.getElementById("files").className = "files"
    document.getElementById("firstfile").className = "ocult";

    var sound = new Audio("click-21156.mp3");
    sound.play();
}

function ocult2(){
    document.getElementById("filesbar").className = "";
    document.getElementById("classifybar").className = "ocult";
    document.getElementById("files").className = "files"
    document.getElementById("secondfile").className = "ocult";

    var sound = new Audio("click-21156.mp3");
    sound.play();
}


function show1(){
    document.getElementById("testdatabar").className = "filebar";
    document.getElementById("filesbar").className = "ocult";
    document.getElementById("files").className = "ocult";
    document.getElementById("firstfile").className = "files filecontent";

    var sound = new Audio("click-21156.mp3");
    sound.play();
}

function show2(){
    document.getElementById("classifybar").className = "filebar";
    document.getElementById("filesbar").className = "ocult";
    document.getElementById("files").className = "ocult";
    document.getElementById("secondfile").className = "files filecontent";

    var sound = new Audio("click-21156.mp3");
    sound.play();
}