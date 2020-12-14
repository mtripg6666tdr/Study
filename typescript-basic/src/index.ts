const Hello = (name: string): string => {
    return "Hello, " + name;
}

var txt: string = Hello("world, typescript!");

window.alert(txt);