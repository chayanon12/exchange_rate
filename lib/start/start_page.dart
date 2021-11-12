import 'package:exchange_rate/home/home.dart';
import 'package:exchange_rate/home/page_crypto.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class StartPage extends StatefulWidget {
  static const routeName = '/start_page';
  const StartPage({Key? key}) : super(key: key);

  @override
  _StartPageState createState() => _StartPageState();
}

class _StartPageState extends State<StartPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: const BoxDecoration(
          image: DecorationImage(
            image: AssetImage("assets/images/bg.jpg"),
            fit: BoxFit.cover,
          ),
        ),
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(
                Icons.assessment_outlined,size: 100.0,color: Colors.white,
              ),
              Text(
                'Currency',
                style: GoogleFonts.lobster(fontSize: 80.0,color: Colors.white),
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Padding(
                    padding: const EdgeInsets.all(20.0),
                    child: ElevatedButton(
                      style: ButtonStyle(
                        backgroundColor: MaterialStateProperty.all(Colors.grey)
                      ),
                      onPressed: () => _handleClickHome(),
                      child: Text('Exchange',
                          style: GoogleFonts.playfairDisplay(fontSize: 20.0,color: Colors.white)),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(20.0),
                    child: ElevatedButton(
                        style: ButtonStyle(
                            backgroundColor: MaterialStateProperty.all(Colors.grey)
                        ),
                        onPressed: () => _handleClickCrypt(),
                        child: Text('Crypto',
                            style:
                                GoogleFonts.playfairDisplay(fontSize: 20.0,color: Colors.white))),
                  )
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }

  _handleClickHome() {
    Navigator.pushNamed(
      context,
      HomePage.routeName,
    );
  }

  _handleClickCrypt() {
    Navigator.pushNamed(
      context,
      PageCrypto.routeName,
    );
  }
}
