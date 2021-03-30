import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Item } from '../item';
import { ItemList } from '../itemList';


@Component({
  selector: 'app-app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.css']
})
export class AppMainComponent implements OnInit {

  itemList1 : ItemList = new ItemList('Tech');
  items1: Item[] = [
    new Item("Ink Cartridge | Black",
    "Color: Black.Cartridge yield (approx.): 190 pages.",
    4.7,
    "https://www.amazon.com/HP-Cartridge-F6U62AN-Deskjet-Officejet/dp/B00WR23X5I/ref=lp_16225007011_1_1",
    ["https://images-na.ssl-images-amazon.com/images/I/71qZHCfiDWL._AC_SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71Eac9vLbeL._AC_SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81F4GPcdiIL._AC_SL1500_.jpg"]

    ),
    new Item(
      "Roku Express ",
      "HD Streaming Media Player with High Speed HDMI Cable and Simple Remote",
      5.0,
      "https://www.amazon.com/Roku-Express-Streaming-Media-Player/dp/B07WVFCVJN/ref=lp_16225007011_1_2",
      ["https://images-na.ssl-images-amazon.com/images/I/81%2B0dqbDGWL._AC_SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/814dsytsu8L._AC_SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/71jA8eeATDL._AC_SL1500_.jpg"]
    ),
    new Item(
      "Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA Port), Black",
      "21.5 inches Full HD (1920 x 1080) widescreen IPS display",
      4.7,
      "https://www.amazon.com/Acer-SB220Q-Ultra-Thin-Frame-Monitor/dp/B07CVL2D2S/ref=lp_16225007011_1_5",
      ["https://images-na.ssl-images-amazon.com/images/I/81QpkIctqPL._AC_SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/71GbO41HbYL._AC_SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/71xb7GDuAGL._AC_SL1500_.jpg"]
    ),
    new Item(
      "NVIDIA Jetson AGX Xavier Developer Kit (32GB)",
      "NVIDIA Jetson Xavier is an AI computer for Autonomous Machines with the performance of a GPU workstation in under 30W",
      4.4,
      "https://www.amazon.com/NVIDIA-Jetson-Xavier-Developer-32GB/dp/B083ZL3X5B/ref=sr_1_4?dchild=1&fst=as%3Aoff&pd_rd_r=bc0a545d-d07d-4235-85cb-6d7d7e109abe&pd_rd_w=Q3DE9&pd_rd_wg=yAzOZ&pf_rd_p=83ab1c34-7657-4d09-b72d-0a3e4b634b1d&pf_rd_r=XF8608SWWP17WE2NW23K&qid=1602294815&rnid=16225007011&s=computers-intl-ship&sr=1-4",
      ["https://images-na.ssl-images-amazon.com/images/I/61m739zmagL._AC_SL1059_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/715Low-A4kL._AC_SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/41wI8A534HL._AC_.jpg"]
    ),
    new Item(
      "BOOX Note3 10.3 ePaper, Android 10, Front Light, 4G 64G, Digital Paper E Ink Notepad",
      "Description",
      3.9,
      "https://www.amazon.com/BOOX-ePaper-Android-Digital-Notepad/dp/B08L12FZSK/ref=sr_1_7?dchild=1&fst=as%3Aoff&pd_rd_r=bc0a545d-d07d-4235-85cb-6d7d7e109abe&pd_rd_w=Q3DE9&pd_rd_wg=yAzOZ&pf_rd_p=83ab1c34-7657-4d09-b72d-0a3e4b634b1d&pf_rd_r=XF8608SWWP17WE2NW23K&qid=1602294815&rnid=16225007011&s=computers-intl-ship&sr=1-7",
      ["https://images-na.ssl-images-amazon.com/images/I/619IO2qlqoL._AC_SL1500_.jpg"]
    )
  ];
  itemList2 = new ItemList('Beds')
  items2:Item[] = [
    new Item(
      "Beatrice Home Fashions Medallion Chenille Bedspread, King, White",
      "100% Cotton. Imported",
      4.4,
      "https://www.amazon.com/Beatrice-Home-Fashions-Medallion-Bedspread/dp/B00FPEKJR0/ref=sr_1_2?dchild=1&keywords=Home+bedding&pd_rd_r=bc0a545d-d07d-4235-85cb-6d7d7e109abe&pd_rd_w=icLnY&pd_rd_wg=yAzOZ&pf_rd_p=bbbef69f-3d9e-41ab-b1eb-e08d5690939b&pf_rd_r=XF8608SWWP17WE2NW23K&qid=1614096311&s=kitchen-intl-ship&sr=1-2",
      ["https://images-na.ssl-images-amazon.com/images/I/81ImzM%2BgMgL._AC_SL1500_.jpg"]
    ),
    new Item(
      "Cozy Line Home Fashions Pink Rose Garden Floral Reversible Coverlet Bedspread Quilt Bedding Set (Ivory/Roses, Queen - 3 Piece)",
      "Care Instruction: Machine wash separately in cold water. Tumble dry low heat. Do not bleach",
      4.7,
      "https://www.amazon.com/Cozy-Line-Home-Fashions-Reversible/dp/B01CTAO84W/ref=sr_1_3?dchild=1&keywords=Home+bedding&pd_rd_r=bc0a545d-d07d-4235-85cb-6d7d7e109abe&pd_rd_w=icLnY&pd_rd_wg=yAzOZ&pf_rd_p=bbbef69f-3d9e-41ab-b1eb-e08d5690939b&pf_rd_r=XF8608SWWP17WE2NW23K&qid=1614096311&s=kitchen-intl-ship&sr=1-3",
      ["https://images-na.ssl-images-amazon.com/images/I/91u9fmL1YNL._AC_SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/91ElT2K0P0L._AC_SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/91IWXOsoOBL._AC_SL1500_.jpg"]
    ),
    new Item(
      'Laura Ashley Home - Charlotte Collection - Luxury Ultra Soft Comforter, All Season Premium Bedding Set, Stylish Delicate Design for Home Décor, King, China Blue',
      'Reversible to a coordinating pattern allowing for two different looks. Bedskirt features a 15" drop',
      4.3,
      'https://www.amazon.com/Laura-Ashley-Charlotte-Comforter-King/dp/B016VM0Q0E/ref=sr_1_6?dchild=1&keywords=Home+bedding&pd_rd_r=b7edb94c-7e38-4004-aac7-56f349525188&pd_rd_w=ZWzV1&pd_rd_wg=dVCu2&pf_rd_p=bbbef69f-3d9e-41ab-b1eb-e08d5690939b&pf_rd_r=3P92XPCC7V89X6E5ENBR&qid=1614700158&s=kitchen-intl-ship&sr=1-6',
      ['https://images-na.ssl-images-amazon.com/images/I/A1kFVCaVUOL._AC_SL1500_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/A1iYSQ7Lb1L._AC_SL1500_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/61iI2UcfhgL._AC_.jpg'
        ]
    ),
    new Item(
      'Swift Home Premium Bedding Set Collection 3-Piece Floral Ruched Pinch Pleat Pintuck Comforter Set - Full/Queen, Baby Blue',
      'Swift Home is a premier bedding manufacturer providing the lowest prices for the highest quality. Our absolute 100% no-questions-asked, you"ll-totally-love-it-or-you-get-all-your-money-back guarantee!',
      4.6,
      'https://www.amazon.com/Swift-Home-Premium-Collection-Comforter/dp/B07JJML6N6/ref=sr_1_10?dchild=1&keywords=Home+bedding&pd_rd_r=b7edb94c-7e38-4004-aac7-56f349525188&pd_rd_w=ZWzV1&pd_rd_wg=dVCu2&pf_rd_p=bbbef69f-3d9e-41ab-b1eb-e08d5690939b&pf_rd_r=3P92XPCC7V89X6E5ENBR&qid=1614700274&s=kitchen-intl-ship&sr=1-10',
      [
        'https://images-na.ssl-images-amazon.com/images/I/91MiF77i1TL._AC_SL1500_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/91Q3Zy9ySKL._AC_SL1500_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/71g9ICmQrnL._AC_SL1500_.jpg'
      ]
    ),
    new Item(
      'Chic Home Westmont 4 Piece Comforter Set Crinkle Crushed Velvet Bedding - Decorative Pillow Shams Included, King, Green',
      'Our fashion forward comforter sets blend style and function to give you the best looking and most comfortable bedding',
      4.4,
      'https://www.amazon.com/Chic-Home-Westmont-Comforter-Bedding-Decorative/dp/B07JJVFHWH/ref=sr_1_18?dchild=1&keywords=Home+bedding&pd_rd_r=b7edb94c-7e38-4004-aac7-56f349525188&pd_rd_w=ZWzV1&pd_rd_wg=dVCu2&pf_rd_p=bbbef69f-3d9e-41ab-b1eb-e08d5690939b&pf_rd_r=3P92XPCC7V89X6E5ENBR&qid=1614700274&s=kitchen-intl-ship&sr=1-18',
      [
        'https://images-na.ssl-images-amazon.com/images/I/91tsdpRXYtL._AC_SL1500_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/717PWobqZuL._AC_SL1500_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/81Ife-mY9IL._AC_SL1500_.jpg'
      ]
    )
  ];
  static AppMainComponent: any;



  constructor(){
    this.itemList1.items = [...this.items1]
    this.itemList2.items = [...this.items2]


    //itemLists: ItemList[] = [this.itemList1,this.itemList2 ];

  }



  static itemLists: ItemList[] = [];
  get itemLists(){
    return AppMainComponent.itemLists;
  }
  ngOnInit(): void {
    if(AppMainComponent.itemLists.length == 0){
      AppMainComponent.itemLists.push(this.itemList1);
      AppMainComponent.itemLists.push(this.itemList2);
    }

  }



  title = 'Lab5';

  showCategory(i:number):void{
    let itemList : ItemList = AppMainComponent.itemLists[i]

    itemList.isVisible = !itemList.isVisible;
    /*if(itemList.isVisible){
      for(let iL of this.itemLists){
        if(iL.myId != itemList.myId ){
          iL.isVisible = false;
        }
      }
    }else{
      for(let iL of this.itemLists){
        if(iL.myId != itemList.myId ){
          iL.isVisible = true;
        }
      }
    }*/
  }

}
