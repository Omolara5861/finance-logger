// Define the ListTemplate class that takes an unordered list element as a parameter in the constructor
export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    // Render a new item in the list with the properties of the provided object, based on the provided position
    render(item, heading, position) {
        let li = document.createElement('li'); // Create a new list item element
        let h4 = document.createElement('h4'); // Create a new heading element
        let p = document.createElement('p'); // Create a new paragraph element
        h4.innerText = heading; // Set the text content of the heading element to the provided heading string
        li.append(h4); // Append the heading element to the list item element
        p.innerText = item.format(); // Set the text content of the paragraph element to the formatted string representation of the provided object
        li.append(p); // Append the paragraph element to the list item element
        // Append or prepend the list item element to the unordered list element based on the provided position
        if (position == 'start') {
            this.container.prepend(li);
        }
        else if (position == 'end') {
            this.container.append(li);
        }
    }
}
