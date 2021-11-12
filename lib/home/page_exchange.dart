import 'package:exchange_rate/models/Rate_item.dart';
import 'package:flutter/material.dart';
import 'package:exchange_rate/home/home.dart';
import 'package:google_fonts/google_fonts.dart';

class PageExchange extends StatefulWidget {
  static const routeName = '/exchange_page';
  const PageExchange({Key? key}) : super(key: key);

  @override
  _PageExchangeState createState() => _PageExchangeState();
}

class _PageExchangeState extends State<PageExchange> {
  @override
  Widget build(BuildContext context) {
    var rateItem = ModalRoute.of(context)!.settings.arguments as RateItem;
    return Scaffold(
      appBar: AppBar(
        title: Text(rateItem.name),
        backgroundColor:Colors.black87,
      ),
      body: Container(
        decoration: const BoxDecoration(
          image: DecorationImage(
            image: AssetImage("assets/images/bg4.jpg"),
            fit: BoxFit.cover,
          ),
        ),
        child: Column(
          children: [
            AspectRatio(
              aspectRatio: 4 / 4,
              child: Image.asset(
                'assets/images/${rateItem.image}',
                width: 30.0,
                height: 30.0,
              ),
            ),
            Container(
              child: Card(
                margin: EdgeInsets.all(8.0),
                elevation: 2.0,
                color: Colors.white.withOpacity(0.6),
                child: Column(
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Image.asset(
                          'assets/images/${rateItem.image}',
                          height: 60.0,
                          width: 60.0,
                        ),
                        SizedBox(
                          width: 20.0,
                        ),
                        Column(
                          children: [

                            Text(
                              '1 ${rateItem.nickname} = ${rateItem.rate} Bath ',
                              style: TextStyle(fontSize: 25.0),
                            ),
                          ],
                        ),
                      ],
                    ),
                    Text(
                        'ราคาอัปเดตเมื่อวันที่ 11/12/2021',
                        style: TextStyle(fontSize: 16.0),
                    ),
                    Text(
                        'เวลา 10.18 AM',
                      style: TextStyle(fontSize: 16.0),
                    ),
                    Text(
                        ''
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
