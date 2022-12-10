const CorrectCount = 0;

function check(props) {
    console.log("run");
    const element = document.getElementById(props);
    element.classList.remove("wrong");
    const value = element.value;
    if (String(value).length > 0) {
        if (value > 4 || value < 1) {
            alert("Please Enter a number between 1 - 4");
            element.innerHTML = "";
            element.value = ""
        } else {
            const list = element.classList;
            for (let i = 1; i < 4; i++) {
                var count = 0;
                var ele = document.getElementsByClassName(list[i]);
                console.log(ele);
                for (e in ele) {
                    console.log(ele[e]);
                    const temp = parseInt(ele[e].value);
                    console.log(temp);
                    if (temp == value) {
                        count++;
                    }
                }
                if (count > 1) {
                    console.log("wrong");
                    element.classList.add("wrong");
                } else {
                    element.classList.add("correct");
                }
            }
            allCorrect();
        }
    }
}

const allCorrect = () => {
    const flag = 0;
    for (let j = 1; j < 17; j++) {
        const getId = String(j);
        const toCheck = document.getElementById(getId);
        if (!toCheck.classList.contains("correct")) {
            flag = 1;
            break;
        }
    }
    if (flag == 0) {
        for (let k = 1; k <= 16; k++) {
            const getId2 = String(k);
            const toCheck2 = document.getElementById(getId2);
            toCheck2.classList.add("allDone");
        }
        document.getElementById("head").classList.remove('hide');
    }
};
