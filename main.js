function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    var classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json", modelReady);
}

function modelReady() {
    console.log("Model is Ready");
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);

        document.getElementById("label").style.color = "rgb(" + r + "," + g + "," + b + ")";
        document.getElementById("confidence").style.color = "rgb(" + r + "," + g + "," + b + ")";

        console.log(results);
        var sound = results[0].label;
        var accuracy = results[0].confidence.toFixed(2) * 100 + "%";

        document.getElementById("label").innerHTML = sound;
        document.getElementById("confidence").innerHTML = accuracy;

        img1 = document.getElementById("hear1");
        img2 = document.getElementById("cat1");
        img3 = document.getElementById("dog1");

        if (sound == "Background Noise") {
            img1.src = "hear.png";
            img2.src = "cat.png";
            img3.src = "dog.gif";
        }
        else {
            if (sound == "Cat") {
                img1.src = "hear.png";
                img2.src = "cat.png";
                img3.src = "dog.gif";
            }
            else {
                if (sound == "Dog") {
                    img1.src = "hear.png";
                    img2.src = "cat.png";
                    img3.src = "dog.gif";
                }
            }
        }
    }
}
