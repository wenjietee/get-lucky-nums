// CONSTANTS

const NUMBER_LIMIT_4D = 4;
// APP OBJECT

const app = {
    // methods
    generate4d(input) {
        inputLength = input.length;
        const numberSet = [];
        for (let i = 0; i < NUMBER_LIMIT_4D - inputLength; i++) {
            numberSet.push(this.generateRandomNum(1, 9));
        }

        if (input) {
            numberSet.unshift(...input);
        }
        return numberSet.join(" ");
    },
    generateRandomNum(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    },
};

// APP START

$(() => {
    // generate 4d event
    $("#generate").on("click", () => {
        // user input prefix
        let inputvalue = "";
        const $amountEle = $("#amount-input");

        if ($amountEle.val().length > 3) {
            $amountEle.text("");
            alert("Only up to 3 predetermined numbers allowed.");
            return;
        }
        if ($amountEle.val().includes("0")) {
            $amountEle.text("");
            alert("Zeros not allowed.");
            return;
        }
        if ($amountEle.val()) {
            inputvalue = $amountEle.val();
        }

        // generate numbers
        const numberSet = app.generate4d(inputvalue);
        const $targetEle = $(".4d-history");
        const $newEle = $("<h5>").addClass("number-set").text(numberSet);
        $targetEle.append($newEle);
    });
});
