# Needed software
1. [Node.js] (https://nodejs.org/en/download/)
2. [Android Studio] (https://developer.android.com/studio/index.html)
3. [JDK 1.8+] (http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
4. Android SDK (16+) In android studio open **Settings**-->**System Settings**-->**Android SDK** and install Android 
 * 4.2
 * 4.3
 * 4.4 
 * 5.0 
 * 6.0

# Ionic setup
 1. Open **Node.js command prompt**
 2. Write `npm install -g cordova ionic` , wait for finish
 3. Then go to the directory where u want to install ionic project ( `cd:/YOUR_DIRECTORY/` )
 4. Now, `ionic start YourAppName`
 
:boom: **This steps will crash if you don`t installed all, waht described in NEEDED SOFTWARE** :boom:
 
 
# Importing our project to ionic
 1. Open your ionic directory by **My computer** or another file manager
 2. Go to **www** directory and replace all files and directories by pasting
 3. Then make **1st** and **3rd** step in **Ionic Setup**
 4. Write `ionic build android`
 5. Your *apk* file will be in `C:/your_ionic_directory/platforms/android/build/outputs/apk/android-debug.apk`
 
  :exclamation: If you want to see your app in browser, make steps **1-3** and then write `ionic serve`and wait. :exclamation:
  
  :boom: **This steps will crash if you don`t installed all, waht described in NEEDED SOFTWARE** :boom: