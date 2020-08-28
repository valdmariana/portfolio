import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export class MenuItem {
    icon: IconDefinition;
    title: string;
    route: string;
    constructor(icon, title, route) {
        this.icon = icon;
        this.title = title;
        this.route = route;
    }
}
