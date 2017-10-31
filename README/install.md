# install MongoDB
> MongoDB 是由C++語言編寫的，是一個基於分佈式文件存儲的開源數據庫系統。在高負載的情況下，添加更多的節點，可以保證服務器性能。MongoDB 旨在為WEB應用提供可擴展的高性能數據存儲解決方案。MongoDB 將數據存儲為一個文檔，數據結構由鍵值(key=>value)對組成。MongoDB 文檔類似於JSON 對象。字段值可以包含其他文檔，數組及文檔數組。

1. 首先我們要在我們的Mac下安裝Homebrew，執行下面的命令進行安裝
```
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
記得安裝前先執行或移除x code

2. 使用brew安裝mongodb
```
$ brew install mongodb
```
3. 運行 MongoDB
在啟動mongo之前，我們需要創建一個目錄，為mongo默認的數據寫入目錄
```
$ sudo mkdir -p /data/db
```
4. 啟動
```
$ brew services start mongodb
or
$ mongod
```

5.  Client端圖像化工具
這套軟體可視覺圖象化掌控MongoDB
[robomongodb](https://robomongo.org/)
