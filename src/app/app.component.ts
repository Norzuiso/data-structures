import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-strucutures';
  opened: boolean = false;
  categorie: string[] = ['1', '2'];
exampleText= "What is Lorem Ipsum?\n" +
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n" +
  "\n" +
  "Why do we use it?\n" +
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n" +
  "\n";
  code = "\ntemplate<class T, int size = 1024>\n" +
    "class Pila {\n" +
    "private:\n" +
    "    T data[size];\n" +
    "    int top;\n" +
    "private:\n" +
    "    Pila();\n" +
    "\n" +
    "    bool isEmpty();\n" +
    "\n" +
    "    bool isFull();\n" +
    "\n" +
    "    void push(T value);\n" +
    "\n" +
    "    T pop();\n" +
    "\n" +
    "    T getTop();\n" +
    "\n" +
    "};\n" +
    "\n" +
    "template<class T, int size>\n" +
    "Pila<T, size>::Pila() {\n" +
    "    top = -1;\n" +
    "}\n" +
    "\n" +
    "template<class T, int size>\n" +
    "bool Pila<T, size>::isEmpty() {\n" +
    "    return top == -1;\n" +
    "}\n" +
    "\n" +
    "template<class T, int size>\n" +
    "bool Pila<T, size>::isFull() {\n" +
    "    return top == size - 1;\n" +
    "}\n" +
    "\n" +
    "template<class T, int size>\n" +
    "void Pila<T, size>::push(T value) {\n" +
    "    Utils::isTrueThrowException(isEmpty(), \"Desbordamiento de datos\");\n" +
    "\n" +
    "    data[++top] = value;\n" +
    "}\n" +
    "\n" +
    "template<class T, int size>\n" +
    "T Pila<T, size>::pop() {\n" +
    "    Utils::isTrueThrowException(isEmpty(), \"La pila se encuentra vacia \");\n" +
    "    return data[top--];\n" +
    "}\n" +
    "\n" +
    "template<class T, int size>\n" +
    "T Pila<T, size>::getTop() {\n" +
    "    Utils::isTrueThrowException(isEmpty(), \"La pila se encuentra vacia \");\n" +
    "    return data[top];\n" +
    "}\n";
}
