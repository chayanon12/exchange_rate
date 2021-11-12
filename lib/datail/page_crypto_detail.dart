import 'package:flutter/material.dart';
import 'package:exchange_rate/models/Cryp_item.dart';

class PageCryptoDetail extends StatefulWidget {
  static const routeName = '/crypto_pagedetail';
  const PageCryptoDetail({Key? key}) : super(key: key);

  @override
  _PageCryptoDetailState createState() => _PageCryptoDetailState();
}

class _PageCryptoDetailState extends State<PageCryptoDetail> {
  @override
  Widget build(BuildContext context) {
    var cryptsItem = ModalRoute.of(context)!.settings.arguments as CryptoItem;
    return Scaffold(
      appBar: AppBar(
        title: Text(cryptsItem.name),
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
                'assets/images/${cryptsItem.graph}',
                width: 20.0,
                height: 20.0,
              ),
            ),
            Container(
              child: Card(
                margin: EdgeInsets.all(10.0),
                elevation: 2.0,
                color: Colors.white.withOpacity(0.6),
                child: Column(
                  children: [
                    Row(
                     mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Image.asset(
                          'assets/images/${cryptsItem.image}',
                          height: 60.0,
                          width: 60.0,
                        ),
                        SizedBox(
                          width: 20.0,
                        ),
                        Column(
                          children: [
                            Text(
                              '1 ${cryptsItem.nickname} = ${cryptsItem.rate} Bath ',
                              style: TextStyle(fontSize: 23.0),
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
