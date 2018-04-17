import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  str1: string;
  resultARR: Array<string> = new Array<string>();
  @Output() ResultVegs: EventEmitter<Array<string>> = new EventEmitter<Array<string>>();

  public clearFunc() {
    this.resultARR = new Array<string>();
    this.ResultVegs.emit(this.resultARR);
    this.str1 = "";
  }

  public addVeg() {
    if (this.str1 == "" || this.str1.length < 3 ||this.str1 == undefined) {
      alert("Please enter a new vegetable name (minimum 3 letters) in the search box.\n and click the + button")
      return;
    }

    for (let x = 0; x < this.vegARR.length; x++) {
      if (this.vegARR[x].VegNAME == this.str1) {
        alert(this.vegARR[x].VegNAME + " already exists in the list");
        return;
      }
    }
    this.vegARR.push({ VegNAME: this.str1 });
    alert(this.str1 + " was add to the list !!");
    this.clearFunc();
  }

  public inputFunc() {
    if (this.str1.length != 1) {

      alert(`Input must be only 1 character\nTry Again`);
      return;
    }
    this.resultARR = new Array<string>();
    for (let x = 0; x < this.vegARR.length; x++) {
      if (this.vegARR[x].VegNAME[0].toLowerCase() == this.str1.toLowerCase()) {
        this.resultARR.push(this.vegARR[x].VegNAME);
      }
    }
    if (this.resultARR.length == 0) {
      alert("I cant find vegetables for the letter " +this.str1 +".\n Try Again or add a new vegetable with the + button")
    }
    else
      this.ResultVegs.emit(this.resultARR);
  }

  ngOnInit() {
  }


  vegARR = [
    {
      "VegNAME": "artichoke"
    },
    {
      "VegNAME": "aubergine "
    },
    {
      "VegNAME": "amrud"
    },
    {
      "VegNAME": "asparagus"
    },
    {
      "VegNAME": "legumes"
    },
    {
      "VegNAME": "alfalfa sprouts"
    },
    {
      "VegNAME": "azuki beans "
    },
    {
      "VegNAME": "bean sprouts"
    },
    {
      "VegNAME": "black beans"
    },
    {
      "VegNAME": "black-eyed peas"
    },
    {
      "VegNAME": "borlotti bean"
    },
    {
      "VegNAME": "broad beans"
    },
    {
      "VegNAME": "chickpeas"
    },
    {
      "VegNAME": "green beans"
    },
    {
      "VegNAME": "kidney beans"
    },
    {
      "VegNAME": "lentils"
    },
    {
      "VegNAME": "lima beans"
    },
    {
      "VegNAME": "mung beans"
    },
    {
      "VegNAME": "navy beans"
    },
    {
      "VegNAME": "pinto beans"
    },
    {
      "VegNAME": "runner beans"
    },
    {
      "VegNAME": "split peas"
    },
    {
      "VegNAME": "soy beans"
    },
    {
      "VegNAME": "peas"
    },
    {
      "VegNAME": "mangetout "
    },
    {
      "VegNAME": "broccoflower "
    },
    {
      "VegNAME": "broccoli "
    },
    {
      "VegNAME": "brussels "
    },
    {
      "VegNAME": "cabbage"
    },
    {
      "VegNAME": "kohlrabi"
    },
    {
      "VegNAME": "cauliflower"
    },
    {
      "VegNAME": "celery"
    },
    {
      "VegNAME": "endive"
    },
    {
      "VegNAME": "fiddleheads"
    },
    {
      "VegNAME": "frisee"
    },
    {
      "VegNAME": "fennel"
    },
    {
      "VegNAME": "greens"
    },
    {
      "VegNAME": "beet greens "
    },
    {
      "VegNAME": "bok choy"
    },
    {
      "VegNAME": "chard "
    },
    {
      "VegNAME": "collard greens"
    },
    {
      "VegNAME": "kale"
    },
    {
      "VegNAME": "mustard greens"
    },
    {
      "VegNAME": "spinach"
    },
    {
      "VegNAME": "herbs "
    },
    {
      "VegNAME": "anise"
    },
    {
      "VegNAME": "basil"
    },
    {
      "VegNAME": "caraway"
    },
    {
      "VegNAME": "cilantro"
    },
    {
      "VegNAME": "coriander"
    },
    {
      "VegNAME": "chamomile"
    },
    {
      "VegNAME": "dill"
    },
    {
      "VegNAME": "fennel"
    },
    {
      "VegNAME": "lavender"
    },
    {
      "VegNAME": "lemon Grass"
    },
    {
      "VegNAME": "marjoram"
    },
    {
      "VegNAME": "oregano"
    },
    {
      "VegNAME": "parsley"
    },
    {
      "VegNAME": "rosemary"
    },
    {
      "VegNAME": "sage"
    },
    {
      "VegNAME": "thyme"
    },
    {
      "VegNAME": "lettuce"
    },
    {
      "VegNAME": "arugula"
    },
    {
      "VegNAME": "mushrooms "
    },
    {
      "VegNAME": "nettles"
    },
    {
      "VegNAME": "spinach"
    },
    {
      "VegNAME": "okra"
    },
    {
      "VegNAME": "onions"
    },
    {
      "VegNAME": "Chives"
    },
    {
      "VegNAME": "Garlic"
    },
    {
      "VegNAME": "Leek"
    },
    {
      "VegNAME": "onion"
    },
    {
      "VegNAME": "shallot"
    },
    {
      "VegNAME": "scallion "
    },
    {
      "VegNAME": "parsley"
    },
    {
      "VegNAME": "bell pepper"
    },
    {
      "VegNAME": "chili pepper"
    },
    {
      "VegNAME": "Jalapeño"
    },
    {
      "VegNAME": "Habanero"
    },
    {
      "VegNAME": "Paprika"
    },
    {
      "VegNAME": "Tabasco pepper"
    },
    {
      "VegNAME": "pepper"
    },
    {
      "VegNAME": "radicchio"
    },
    {
      "VegNAME": "rhubarb"
    },
    {
      "VegNAME": "root vegetables"
    },
    {
      "VegNAME": "beetroot"
    },
    {
      "VegNAME": "cattlefeed"
    },
    {
      "VegNAME": "carrot"
    },
    {
      "VegNAME": "celeriac"
    },
    {
      "VegNAME": "daikon"
    },
    {
      "VegNAME": "ginger"
    },
    {
      "VegNAME": "parsnip"
    },
    {
      "VegNAME": "rutabaga"
    },
    {
      "VegNAME": "turnip"
    },
    {
      "VegNAME": "radish"
    },
    {
      "VegNAME": "wasabi"
    },
    {
      "VegNAME": "horseradish"
    },
    {
      "VegNAME": "white radish "
    },
    {
      "VegNAME": "skirret"
    },
    {
      "VegNAME": "sweetcorn "
    },
    {
      "VegNAME": "topinambur"
    },
    {
      "VegNAME": "squashes "
    },
    {
      "VegNAME": "acorn squash"
    },
    {
      "VegNAME": "bitter melon"
    },
    {
      "VegNAME": "squash"
    },
    {
      "VegNAME": "banana squash"
    },
    {
      "VegNAME": "courgette"
    },
    {
      "VegNAME": "cucumber "
    },
    {
      "VegNAME": "delicata"
    },
    {
      "VegNAME": "gem squash"
    },
    {
      "VegNAME": "hubbard squash"
    },
    {
      "VegNAME": "marrow"
    },
    {
      "VegNAME": "patty pans"
    },
    {
      "VegNAME": "pumpkin"
    },
    {
      "VegNAME": "tat soi"
    },
    {
      "VegNAME": "tomato "
    },
    {
      "VegNAME": "tubers"
    },
    {
      "VegNAME": "jicama"
    },
    {
      "VegNAME": "artichoke"
    },
    {
      "VegNAME": "potato"
    },
    {
      "VegNAME": "quandong"
    },
    {
      "VegNAME": "sunchokes"
    },
    {
      "VegNAME": "sweet potato"
    },
    {
      "VegNAME": "taro"
    },
    {
      "VegNAME": "yam"
    },
    {
      "VegNAME": "water chestnut"
    },
    {
      "VegNAME": "watercress"
    },
    {
      "VegNAME": "zucchini"
    }
  ]

}
