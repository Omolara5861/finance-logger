import { HasFormatter } from "../interfaces/interface";

export class ListTemplate {
    constructor(private container: HTMLUListElement) {}

    render(item: HasFormatter, heading: string, position: 'start' | 'end'): void {

        let li = document.createElement('li');
        let h4 = document.createElement('h4');
        let p = document.createElement('p');

        h4.innerText = heading;
        li.append(h4)
        p.innerText = item.format();

        li.append(p);

        if(position == 'start') this.container.prepend(li);
        else if(position == 'end') this.container.append(li);
    }

}