
function onClick(input, name) {
    let names = ['livy', 'cicero', 'dionysius', 'plutarch', 'ovid', 'virgil', 'dante', 'giambologna', 'gout', 'picasso', 'crowley']
    for (i = 1; i < 11; i++) {
        document.getElementById(i.toString()).style.display = "none";
    }

    for (i = 0; i < names.length; i++) {
        document.getElementById(names[i]).style.opacity = "0.3";
    }

    document.getElementById(input).style.display = "block";
    document.getElementById(name).style.opacity = "1.0";

    console.log(document.getElementById(input))
}