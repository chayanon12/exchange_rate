import 'dart:async';

import 'package:exchange_rate/datail/page_crypto_detail.dart';
import 'package:exchange_rate/home/page_crypto.dart';
import 'package:exchange_rate/home/page_exchange.dart';
import 'package:exchange_rate/start/start_page.dart';
import 'package:exchange_rate/start/splash_screen.dart';
import 'package:flutter/material.dart';

import 'home/home.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  static const appName = 'Currency';
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: appName,
      theme: ThemeData(
        textTheme: const TextTheme(
          headline1: TextStyle(
              fontSize: 30.0,
              fontWeight: FontWeight.bold,
              color: Colors.black54),
        ),
        primarySwatch: Colors.blue,
      ),
       // home: RefreshPage(),
      routes: {
        StartPage.routeName:(context) => const StartPage(),
        SplashScreen.routeName: (context) => const SplashScreen(),
        HomePage.routeName: (context) => const HomePage(),
        PageCrypto.routeName:(context) => const PageCrypto(),
        PageCryptoDetail.routeName : (context) => const PageCryptoDetail(),
        PageExchange.routeName:(context) => const PageExchange(),
      },
       initialRoute: SplashScreen.routeName,
    );
  }
}

