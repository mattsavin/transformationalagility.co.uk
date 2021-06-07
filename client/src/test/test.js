const data = {
    "boxes": {
        "first": {
            "justify": "left",
            "backgroundImage": "../images/solar-panels.jpg"
        },
        "second": {
            "justify": "right",
            "heading": "Enabling Transformational Change",
            "subheading": "Achieve Your Goals",
            "content": "With over 20 years of experience, our staff has the etc..."
        }
    }
}

console.log(data.boxes)

for (const key in data.boxes) {
    if (Object.hasOwnProperty.call(data.boxes, key)) {
        console.log(key);
    }

}