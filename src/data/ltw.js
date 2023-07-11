const SET_TEST = [
  {
    question:
      'Phương thức nào của DataSet dùng để ghi cấu trúc các bảng dữ liệu vào một file .xsd?',
    answer: 'WriteXmlSchema()',
  },
  {
    question:
      'Cho file Book.xml sau:<?xml version="1.0"?><Catalog>  <Order>    <Type>1</Type>    <Book>      <ID>1</ID>      <Price>10</Price>    </Book>  </Order></Catalog>Hãy cho biết TablesTài liệu tham khảo [1],.Columns.Count của một DataSet sau khi đọc Schema của file này?',
    answer: '3',
  },
  {
    question: 'Mô hình dữ liệu của XmlDataDocument có kiểu nào?',
    answer: 'DataSet',
  },
  {
    question:
      'Mô hình dữ liệu của XmlDataDocument được lưu trữ trong file có phần mở rộng nào?',
    answer: '.xsd',
  },
  {
    question:
      'Nếu node là tên của một đối tượng XmlNode thì biểu thức nào tương đương với node.FirstChild.NextSibling?',
    answer: 'node.ChildNodes[1],',
  },
  {
    question:
      'Có thể truy cập đến node con đầu tiên của XmlNode bằng thuộc tính nào?',
    answer: 'FirstChild',
  },
  {
    question:
      'Có thể truy cập đến node con đầu tiên của XmlNode bằng thuộc tính nào?',
    answer: 'FirstChild',
  },
  {
    question:
      'Cho file Book.xml sau:<?xml version="1.0"?><Catalog>  <Order>    <Type>1</Type>    <Price>10</Price>    <Book>      <ID>1</ID>    </Book>  </Order></Catalog>Hãy cho biết Tables[0].TableName của một DataSet sau khi đọc Schema của file này?',
    answer: 'Order',
  },
  {
    question:
      'Phương thức nào của DataSet dùng để đọc cấu trúc các bảng dữ liệu từ một file .xsd?',
    answer: 'ReadXmlSchema()',
  },
  {
    question:
      'Phương thức nào của DataSet dùng để ghi dữ liệu vào một file .xml?',
    answer: 'WriteXml()',
  },
  {
    question:
      'Đoạn xml dưới đây có gì SAI?<Order Type=“1”><ID></ID><Name></Name><Order>',
    answer: '<Order> không có </Order>',
  },
  {
    question:
      'Phương thức nào của XmlDocument dùng để đọc một xâu ký tự theo chuẩn Xml?',
    answer: 'LoadXml()',
  },
  {
    question:
      'Có thể truy cập đến node gốc của XmlDocument bằng thuộc tính nào?',
    answer: 'DocumentElement',
  },
  {
    question:
      'Khi một XmlNode được tạo từ một Xml có cấu trúc <ID Type=“1”></ID> thì Value của nó là gì?',
    answer: 'null',
  },
  {
    question:
      'Cho đoạn xml sau:  <Order type=”1”>    <ID>1</ID>    <ProductID>1</ProductID>  </Order>Nếu node là tên của đối tượng XmlNode trỏ đến <Order> thì biểu thức nào sinh ra lỗi khi chạy chương trình?',
    answer: 'node.ChildNodes[2].Value',
  },
]

export default SET_TEST
