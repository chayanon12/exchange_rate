import 'package:exchange_rate/datail/page_crypto_detail.dart';
import 'package:exchange_rate/models/Cryp_item.dart';
import 'package:flutter/material.dart';
import 'package:exchange_rate/datail/crypto_detail.dart';

class PageCrypto extends StatefulWidget {
  static const routeName = '/crypto_page';
  const PageCrypto({Key? key}) : super(key: key);

  @override
  _PageCrytoState createState() => _PageCrytoState();
}

class _PageCrytoState extends State<PageCrypto> {
  @override
  Widget build(BuildContext context) {
    List<CryptoItem> cryptolistitem = CryptList.cryptoList;
    return Scaffold(
      appBar: AppBar(
        title: Text('CryptoCurrency'),
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
          itemCount: cryptolistitem.length,
          itemBuilder: (BuildContext, int index) {
            var items = cryptolistitem[index];
            return Card(
              margin: EdgeInsets.all(8.0),
              elevation: 5.0,
              color: Colors.white.withOpacity(0.6),
              child: InkWell(
                onTap: () => _handleClickCryptItem(items),
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Row(
                    children: [
                      Image.asset(
                        'assets/images/${items.image}',
                        height: 60.0,
                        width: 60.0,
                      ),
                      SizedBox(
                        width: 20.0,
                        height: 30.0,
                      ),
                      Column(
                        // mainAxisAlignment: MainAxisAlignment.start,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            items.name,
                            style: TextStyle(fontSize: 20.0),
                          ),
                          Text(
                            items.names,
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
  _handleClickCryptItem(CryptoItem crypItem) {
    Navigator.pushNamed(
      context,
      PageCryptoDetail.routeName,
      arguments: crypItem,
    );
  }
}
