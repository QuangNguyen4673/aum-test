const BAI1 = [
  {
    questions: [
      'Đối tượng nào được server trả về khi có yêu cầu một trang .aspx?',
      'Thuộc tính nào quyết định một thành phần được xử lý phía Server?',
      'Để sử dụng các đối tượng IDbCommand, IDbConnection cần sử dụng namespace nào?',
      'Namespace nào chứa các class mô tả các cấu trúc dữ liệu?',
      'Biểu thức nào sau đây là sai nếu chưa chỉ định sử dụng namespace System.Xml?',
      'Để sử dụng được đối tượng XmlTextReader cần sử dụng namespace nào?',
      'Để sử dụng được đối tượng XmlTextReader cần sử dụng namespace nào?',
      'Biểu thức nào sau đây là sai nếu chưa chỉ định sử dụng namespace System.Data?',
      'Thuộc tính nào quyết định một thành phần được xử lý phía Server?',
      'Để sử dụng được đối tượng Stack cần sử dụng namespace nào?',
      'Biểu thức nào sau đây là sai nếu chưa chỉ định sử dụng namespace System.Web.UI.WebControls?',
      'Biểu thức nào sau đây là sai nếu chưa chỉ định sử dụng namespace System.Collections ?',
      'Directive nào cho phép dùng một namespace?',
      'Bổ sung các thuộc tính phù hợp vào dấu 3 chấm cho tag <asp:Button … />',
      'Đối tượng nào được server trả về khi có yêu cầu một trang .aspx?',
    ],
    answers: [
      'Responce',
      'runat =  “server”',
      'System.Data',
      'System.Collections',
      'XmlTextReader rdr;',
      'System.Xml',
      'System.Xml',
      'DataTable table = (DataTable)listBox1.DataSource',
      'runat = “server”',
      'System.Collections',
      'Button button = (Button)form1.Controls[0];',
      'Stack stack = new Stack()',
      'Import',
      'ID=“Button1” runat=“server”',
      'Responce',
    ],
  },
]

const BAI2 = [
  {
    questions: [
      'Web User Control có control  <asp:label ID=”Label1”>. Biểu thức trong thuộc tính đặt dòng chữ hiện trên control sẽ được viết thế nào?',
      'Tag <a> tạo ra control nào?',
      'Tag <textarea> tạo ra control nào?',
      'Tag <textarea> tạo ra control nào?',
      'Control nào KHÔNG thể hiện thông tin có tính chất danh sách?',
      'Cho control sau: <asp:CheckBoxList ID=”CheckBoxList1” runat=”server”> Biểu thức nào cho phép truy cập đến danh sách các item của control?',
      'Cho control sau:<asp:CheckBoxList ID=“CheckBoxList1” runat=“server”>Biểu thức nào cho phép truy cập đến item đang được chọn của control?',
      'Đâu là tag xác định một Web Server Control?                       ',
      'Đối tượng nào KHÔNG cho phép người sử dụng chọn dữ liệu từ một danh sách cho trước?',
      'Control nào kiểm tra giá trị trong khoảng cho trước?',
      'Cho control sau:<asp:CheckBoxList ID=“CheckBoxList1” runat=“server”>Biểu thức nào cho phép truy cập đến danh sách các item của control?',
      'Thuộc tính nào quyết định số lượng Item được thể hiện trên DataList?',
      'Tag <input type=”text”> tạo ra control nào?',
      'Cho đoạn tag sau:<asp:RadioButton ID= “Radio1”  GroupName= “Group1” runat= “server” Checked= “true” /><asp:RadioButton ID= “Radio2”  GroupName=“Group1” runat= “server” />Vì sao hai RadioButton này không thể cùng có thuộc tính Checked bằng “true”?',
      'Tag <a> tạo ra control nào?',
    ],
    answers: [
      'set { Lable1.Text = value; }',
      'dòng link đến một web page',
      'ô nhập nhiều dòng ký tự',
      'Một ô nhập nhiều dòng ký tự',
      '<table>',
      'CheckBoxList1.Items',
      'CheckBoxList1.Items[CheckBoxList1.SelectedIndex]',
      'asp: …>',
      '<asp:TextBox>',
      '< asp:RangeValidator>',
      'CheckBoxList1.Items',
      'DataSource',
      'Một ô nhập một dòng ký tự',
      'Chúng có cùng GroupName',
      'Một dòng link đến một web page',
    ],
  },
]

const BAI3 = [
  {
    questions: [
      'Thuộc tính nào của Parameter quyết định nó là tham số đầu vào hoặc ra?',
      'Thuộc tính nào của DataAdapter chứa câu SQL xóa dữ liệu trong cơ sở dữ liệu?',
      'Thuộc tính nào của DataAdapter chứa câu SQL đọc dữ liệu vào DataSet?',
      'Phương thức nào của SqlCommand dùng để lấy một giá trị từ một bảng?',
      'Thuộc tính nào của DataAdapter chứa câu SQL cập nhật dữ liệu trong cơ sở dữ liệu?',
      'Giả sử trong cơ sở dữ liệu BookShop có procedure được tạo ra bằng script: CREATE PROCEDURE InsertOrder (@ID int = NULL output, @BookID int, @Quantity int) … Cho biết nguyên nhân sinh ra lỗi khi chạy đoạn code dưới đây? SqlConnection connection = new SqlConnection(“Data source=localhost;Initial catalog=BookShop”); SqlCommand command = new SqlCommand(“InsertOrder”, connection); command.Parameters.Add(“@ID”, SqlDbType.Int);  command.Parameters.Add(“@BookID”, SqlDbType.Int).Value = bookID; command.Parameters.Add(“@Quantity” , SqlDbType.Int) = quantity;  connection.Open();  command.ExecuteNonQuery();  connection.Close();',
      'Câu lệnh SQL được thực hiện bởi SqlCommand được đặt vào thuộc tính nào?',
      'Phương thức nào của SqlCommand dùng để đọc một bảng dữ liệu?',
      'Thuộc tính nào của DataAdapter chứa câu SQL thêm  dữ liệu vào cơ sở dữ liệu?',
      'Để duyệt qua tất cả các giá trị trong một DataRow cần sử dụng thuộc tính nào?',
      'Đâu là tập con của DataSet',
      'Thành phần nào của Provider cho phép kết nối đến cơ sở dữ liệu?',
      'Phương thức nào của SqlCommand dùng để thực hiện một procedure?',
      'Phương thức nào của DataAdapter dùng để cập nhật sự thay đổi của dữ liệu từ DataTable vào cơ sở dữ liệu?',
      'Thành phần nào của Provider dùng để chạy một câu SQL?',
    ],
    answers: [
      'Direction',
      'DeleteCommand',
      'SelectCommand',
      'ExecuteScalar()',
      'UpdateCommand',
      'command.commandType không phù hợp',
      'CommandText',
      'ExecuteReader()',
      'InsertCommand',
      'ItemArray',
      'Tables',
      'Connection',
      'ExecuteNonQuery()',
      'Update()',
      'Command',
    ],
  },
]

export { BAI1, BAI2, BAI3 }
