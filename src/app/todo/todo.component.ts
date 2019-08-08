import { Component, OnInit } from "@angular/core";
import { Todo } from "../interfaces/todo";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  Todo: Todo[] = [
    {
      task: "Clean dishes",
      completed: false
    },
    {
      task: "Take out trash",
      completed: true
    },
    {
      task: "Fold laundry",
      completed: false
    },
    {
      task: "Cook dinner",
      completed: true
    }
  ];

  constructor() {}

  ngOnInit() {}
}
