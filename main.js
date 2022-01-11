function startClassification {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    var classifier = ml5.soundClassifier("", modelReady);
}

function modelReady {
    console.log("Model is Ready");
    classifier.classify(gotResults);
}