import 'package:exchange_rate/home/Rate_list_page.dart';
import 'package:exchange_rate/home/page_exchange.dart';
import 'package:exchange_rate/models/Rate_item.dart';
import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  static const routeName = '/home_page';
  const HomePage({Key? key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
    List<RateItem> listitem = RateList.rateList;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('ExchangeRate'),
        backgroundColor:Colors.black87,
      ),

      body: Container(
        decoration: const BoxDecoration(
          image: DecorationImage(
            image: AssetImage("assets/images/bg4.jpg"),

            fit: BoxFit.cover,
          ),
        ),
        child: ListView.builder(
          itemCount:  listitem.length,
            itemBuilder: (BuildContext , int index){
            var item =  listitem[index];

              return Card(
                margin: EdgeInsets.all(8.0),
                elevation:5.0,
                color: Colors.white.withOpacity(0.6),

                child: InkWell(
                   onTap: ()=> _handleClickRateItem(item),
                  child: Padding(
                    padding: const EdgeInsets.all(16.0),
                    child: Row(
                      children: [
                        Image.asset(
                            'assets/images/${item.image}',
                          height: 60.0,
                          width: 60.0,
                        ),
                        SizedBox(width: 20.0,),
                        Column(
                         // mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                                item.name,
                              style: TextStyle(fontSize: 20.0),
                            ),
                            Text(item.names,
                              style: TextStyle(fontSize: 20.0),
                            )
                          ],
                        ),

                      ],
                    ),
                  ),
                ),
              );
            },
        ),
      ),
    );
  }
    void _showMaterialDialog(String str,double rate) {// ไม่ค่อยสวยแต่เก็บไว้ก่อน
      showDialog(
        context: context,
        builder: (BuildContext context) {
          return AlertDialog(
            title: Text(str),
            content: Text('1 Bath = ${rate.toString()}', style: Theme.of(context).textTheme.headline1),
            actions: [
              // ปุ่ม OK ใน dialog
              TextButton(
                child: const Text('OK'),
                onPressed: () {
                  // ปิด dialog
                  Navigator.of(context).pop();
                },
              ),
            ],
          );
        },
      );
    }
    _handleClickRateItem(RateItem rateItem) {
      Navigator.pushNamed(
        context,
        PageExchange.routeName,
        arguments: rateItem,
      );
    }
}


