const set1 = [
  {
    ques: 'Default size là tính\nnăng gì?',
    ans: 'Xác lập width và\nheight của lưới cực.',
  },
  {
    ques: 'Vẽ ngôi sao bằng Pen Tool trong Adobe InDesign có mấy bước?',
    ans: '5',
  },
  {
    ques: 'Hình ảnh trực quan là đặc trưng mạnh mẽ cho dạng thiết kế nào?',
    ans: 'Thiết kế Nhận diện thương hiệu',
  },
  {
    ques: 'Có mấy cách để tạo Mặt phẳng (Plane)?',
    ans: '2',
  },
  {
    ques: 'Lệnh nào sau đây không thuộc Geometry?',
    ans: 'Rubik',
  },
  {
    ques: 'Có bao nhiêu chế độ hiển thị trong Indesign?',
    ans: '3',
  },
  {
    ques: 'Menu, micro-interactions và button là những thuật ngữ thuộc dạng thiết kế nào?',
    ans: 'Thiết kế UI',
  },
  {
    ques: 'Chọn bảng bạn muốn mở (nếu không nhìn thấy, chọn nó từ menu Window), và sau đó bước tiếp theo thao tác như thế nào?',
    ans: 'Chọn undock Panel hoặc undock Frame từ trình đơn bảng điều khiển. Khung undock undocks nhóm bảng.',
  },
  {
    ques: 'Để chọn một tài liệu mới, chọn File | New từ menu chính, phím tắt là gì?',
    ans: 'Ctrl N',
  },
  {
    ques: 'Tùy chọn nào sau đây thuộc tùy chọn Blend?',
    ans: 'Smooth Color',
  },
  {
    ques: 'Dạng thiết kế nào có sự hạn chế kích thước trong in ấn mà nhiều nhà thiết kế phải dùng Template mẫu?',
    ans: 'Thiết kế họa tiết trang phục',
  },
  {
    ques: 'Chọn công cụ gì để tạo văn bản xung quanh Path?',
    ans: 'Horizontal/Vertical Type',
  },
  {
    ques: 'Đâu không phải lợi ích của ngành thiết kế Đồ họa?',
    ans: 'Tính chất công việc không cần bắt kịp xu thế',
  },
  {
    ques: 'Point là gì?',
    ans: 'Điểm',
  },
  {
    ques: 'Vùng phóng đại hiển thị mức độ phóng đại của tài liệu là bao nhiêu?',
    ans: 'Có thể là bất kì số giữa 3,13% và 6400%',
  },
  {
    ques: 'Lệnh Liquify thuộc Menu tool nào?',
    ans: 'Filter',
  },
  {
    ques: 'Dựng mô hình 3D đồng nghĩa với sử dụng những trục nào?',
    ans: 'Tất cả các đáp án trên đều đúng',
  },
  {
    ques: 'Lệnh Egg là gì?',
    ans: 'Vẽ hình kiểu quả trứng',
  },
  {
    ques: 'Opacity càng nhỏ thì các pixel ảnh trên layer càng trong suốt. Đúng hay sai?',
    ans: 'Đúng',
  },
  {
    ques: 'Bleed & Slug nghĩa là gì?',
    ans: 'Khoảng cách mở rộng đến rìa trang giấy khi in và khoảng cách dùng đánh số trang.',
  },
  {
    ques: 'Nhắc đến Photoshop là nhắc đến?',
    ans: 'Pixel',
  },
  {
    ques: 'Tỷ lệ 1:1.61 có nghĩa là gì?',
    ans: 'Tỷ lệ vàng',
  },
  {
    ques: 'Có bao nhiêu tùy chọn trên bảng Pages (Window/Pages)?',
    ans: '5',
  },
  {
    ques: 'Thay đổi số bước phục hồi bằng lệnh Undo, cần phải thao tác như thế nào?',
    ans: 'Customize/Preference/ Chọn tab GeneralTrong mục Scene Undo tăng hoặc giảm Level',
  },
  {
    ques: 'Vẽ hình vòng xuyến là lệnh gì?',
    ans: 'Lệnh Donut',
  },
  {
    ques: 'Màu Background là màu gì?',
    ans: 'Xác định màu nền mặc định của layer',
  },
  {
    ques: 'Chế độ nào không thuộc chế độ màu chỉnh sửa hình ảnh?',
    ans: 'Multi media',
  },
  {
    ques: 'Các yếu tố như kiểu chữ, văn bản, bố cục, minh họa và hình ảnh, in ấn thuộc dạng thiết kế nào?',
    ans: 'Thiết kế xuất bản và in ấn',
  },
  {
    ques: 'Cách nào sau đây không thể sao chép đối tượng trong vùng chọn?',
    ans: 'Vào Select à Deselect (Ctrl+D)',
  },
  {
    ques: 'Số lượng mảnh ghép để tạo th ành hình cầu (nếu số lượng này nhỏ sẽ được các dạng hình học khác) là lệnh gì?',
    ans: 'Segments',
  },
  {
    ques: 'Eyedroper Tool (I) có tính năng gì?',
    ans: 'Cho phép bấm lên bất cứ đối tượng nào trên màn hình có màu, để sao chép mẫu màu viền hoặc nền',
  },
  {
    ques: 'Có bao nhiêu thông tin về các bảng Tools?',
    ans: '13',
  },
  {
    ques: 'Bạn có thể chỉ định cách bạn muốn After Effects để giải thích các thuộc tính như tốc độ khung hình và tỉ lệ pixel thuộc bước nào?',
    ans: 'Nhập vào và tổ chức cảnh',
  },
  {
    ques: 'Các sản phẩm như billboard, bảng quảng cáo, bảng hiệu, banner, hồ sơ xã hội, brochure kỹ thuật số, email marketing, và các nội dung kỹ thuật số khác thuộc phân loại Thiết kế nào?',
    ans: 'Thiết kế Truyền thông Marketing',
  },
  {
    ques: 'UI là gì?',
    ans: 'Giao diện người dùng',
  },
  {
    ques: 'Để hiển thị hoặc ẩn một công cụ, thao tác như thế nào?',
    ans: 'Chọn Edit> Preferences> General (Windows) hoặc After Effects> Preferences>General (hệ điều hành Mac).Chọn hoặc bỏ chọn Hiển thị Công cụ',
  },
  {
    ques: 'Phím tắt Ctrl O là gì?',
    ans: 'Mở file',
  },
  {
    ques: 'Nhà Thiết kế Đồ Họa có cần biết ngoại ngữ hay không?',
    ans: 'Biết cơ bản đủ dùng để giao tiếp và đọc tài liệu',
  },
  {
    ques: 'Mặt nạ là gì?',
    ans: 'Mặt nạ được xem như một layer trung gian chia layer hiện tại thành 2 khu vực: thấy (chỉnh sửa được) và không thấy (không chỉnh sửa được).',
  },
  {
    ques: 'Công cụ Fill arc có tính năng gì?',
    ans: 'Tô đầy cung (cho dù Opened hoặc closed) bằng màu tô hiện hành.',
  },
  {
    ques: 'Để thiết lập hoặc thay đổi số Artboard trong tài liệu mở, có tất cả bao nhiêu bước?',
    ans: '7',
  },
  {
    ques: 'Rectangular Marquee thuộc nhóm công cụ nào?',
    ans: 'Nhóm Marquee (M)',
  },
  {
    ques: 'Để Setup Projects, tại hàng Timecode base, chọn fpt nào?',
    ans: '25',
  },
  {
    ques: 'F là phím tắt của tính năng gì?',
    ans: 'Chế độ xem ảnh',
  },
  {
    ques: 'Thao tác Windows | Type | paragraph thuộc tính năng nào?',
    ans: 'Panel paragraph',
  },
  {
    ques: 'Cách thiết lập Workspace ở Bước đầu tiên diễn ra như thế nào?',
    ans: 'Chọn Window | Workspace | New Workspace',
  },
  {
    ques: 'Artboard là gì?',
    ans: 'Artboard là vùng hình chữ nhật hiện hành trong Workspace',
  },
  {
    ques: 'Nếu bảng điều khiển không hiển thị, chọn nó từ đâu để mở nó?',
    ans: 'Menu Window',
  },
  {
    ques: 'Ở phần Files of type bạn sẽ nhìn thấy những file mà AE cho phép import. PhầnTarga sequence sẽ active nếu bạn có một chuỗi hình được đánh thứ tự liền nhau, sau khi import vào, bạn kéo được bao nhiêu files từ Project panel thả vào Timeline panel?',
    ans: 'Rất nhiều',
  },
  {
    ques: 'Để sử dụng Workspace mới, chọn tên của nó từ đâu?',
    ans: 'Menu',
  },
]

const set2 = [
  {
    ques: 'Tip nếu bạn muốn tạo khối lập phương?',
    ans: 'Trước khi vẽ hãy chọn trên bảng cuộn Creation Method là Cube.',
  },
  {
    ques: 'Tầm quan trọng của thiết kế bao bì là gì?',
    ans: 'Là ấn tượng đầu tiên của khách hàng khi nhìn thấy sản phẩm để họ quyết định có mua hay không',
  },
  {
    ques: 'Với không gian làm việc mà bạn muốn khôi phục lại hoạt động, thao tác như thế nào?',
    ans: 'Chọn Window> Workspace> Reset [tên không gian làm việc], và sau đó nhấp vào Huỷ Thay đổi.',
  },
  {
    ques: 'Để điều chỉnh kích thước của từng panel, cần làm cách nào?',
    ans: 'Bằng cách đưa con trỏ chuột vào giữa hai panel',
  },
  {
    ques: 'Photoshop gồm tất cả bao nhiêu bộ lọc?',
    ans: '97',
  },
  {
    ques: 'Để tô màu đơn, click giữ chuột trái và di chuyển chuột để vẽ được gì?',
    ans: 'A & B đều đúng',
  },
  {
    ques: 'Trong illustrator để có thể gọi ra lệnh Pathfinder bằng mấy cách?',
    ans: '2',
  },
  {
    ques: 'Tính năng nào sau đây không thuộc Panel?',
    ans: 'Zoom',
  },
  {
    ques: 'Nhà thiết kế UI sẽ thường làm việc với ai?',
    ans: 'Nhà thiết kế UX',
  },
  {
    ques: 'Công cụ nào sau đây không thuộc nhóm công cụ Shape?',
    ans: 'Line',
  },
  {
    ques: 'Để di chuyển màn hình theo chiều ngang, ta cần phải thao tác như thế nào?',
    ans: 'Giữ phím Shift khi bạn cuộn chuột phía sau hoặc phía trước',
  },
  {
    ques: 'Công dụng của Magic Eraser là gì?',
    ans: 'Xóa vùng hình ảnh có màu tương đồng',
  },
  {
    ques: 'Adobe Photoshop là gì?',
    ans: 'Phần mềm thiết kế và xử\nlý hình ảnh chuyên nghiệp',
  },
  {
    ques: 'Insert Column và Insert Row thuộc thao tác nào trong Indesign?',
    ans: 'Tạo bảng trong Indesign',
  },
  {
    ques: 'Có bao nhiêu loại hình dạng (Shapes) cơ bản?',
    ans: '3',
  },
  {
    ques: 'Chế độ nào không phải Blend màu trong Indesign?',
    ans: 'Stroke',
  },
  {
    ques: 'Nêu cách làm việc với các Palette?',
    ans: 'Tất cả các đáp án trên đều đúng',
  },
  {
    ques: 'Kỹ thuật Thiết kế Đồ họa là gì?',
    ans: 'Tất cả các đáp án trên đều đúng',
  },
  {
    ques: 'Để sử dụng một không gian làm việc Adobe, thao tác như thế nào?',
    ans: 'Chọn Window > Workspace',
  },
  {
    ques: 'Có bao nhiêu bước để tạo ra một Project?',
    ans: '6',
  },
  {
    ques: 'Để tạo text có mạng lưới cong, chọn khối text bằng công cụ Selection và sau đó thao tác như thế nào?',
    ans: 'Chọn Object | Envelope Distort | Make with Mesh khi hộp thoại Mesh Options mở ra, chọn số hàng và số cột mong muốn và nhấp OK.',
  },
  {
    ques: 'Lúc bắt đầu một dự án, điều đầu tiên mà bạn cần làm là gì?',
    ans: 'Tạo một tài liệu mới',
  },
  {
    ques: 'Màu foreground và background mặc định ban đầu trong phần mềm khi tạo khổ giấy là màu gì?',
    ans: 'Đen – Trắng',
  },
  {
    ques: 'Nhà thiết kế nhận diện thương hiệu thường làm việc cùng với những ai?',
    ans: 'Đáp án A&B',
  },
  {
    ques: 'Timeline có tính năng gì?',
    ans: 'Điều khiển animation, effects… theo thời gian.',
  },
  {
    ques: 'Trong bài học, các hình ảnh minh họa được dùng trong phiên bản Photoshop nào?',
    ans: 'CC2015',
  },
  {
    ques: 'Để hiển thị menu ngữ cảnh, ta cần phải thao tác như thế nào?',
    ans: 'Để hiển thị menu ngữ cảnh, nhấn chuột phải (Windows) hoặc bấm điều khiển và giữ nút chuột (Mac OS).',
  },
  {
    ques: 'Photoshop thuộc bản quyền hãng nào?',
    ans: 'Adobe',
  },
  {
    ques: 'Tạo chữ Drop Cap là gì?',
    ans: 'Là tạo những chữ cái tùy ý, thông thường là chữ cái đầu của nội dung hiển thị lớn hơn các chữ khác theo một phong cách riêng biệt để dễ dàng nhận biết đâu là đoạn đầu của nội dung.',
  },
  {
    ques: 'Ưu điểm của Indesign là có hệ màu được thiết lập gần giống với phần mềm nào?',
    ans: 'Illustrator',
  },
  {
    ques: 'Vẽ các đường cong bằng Pen Tool trong indesign cần có mấy bước?',
    ans: '6',
  },
  {
    ques: 'Khi nhiều Artboard được phát hiện, nút nào được kích hoạt?',
    ans: 'Tất cả các đáp án trên đều đúng',
  },
  {
    ques: 'Erase Tool có tính năng gì?',
    ans: 'Công cụ xoá',
  },
  {
    ques: 'Creation Method là gì?',
    ans: 'Cách tạo khối cầu',
  },
  {
    ques: 'Khởi động chương trình Photoshop bằng cách nào?',
    ans: 'Click đôi chuột lên biểu tượng Adobe Photoshop trên desktop.',
  },
  {
    ques: 'Màu Dodge là gì?',
    ans: 'Làm sáng màu cơ bản để phản ánh màu pha trộn. Trộn với màu đen không tạo ra sự thay đổi.',
  },
  {
    ques: 'Lệnh Helix là gì?',
    ans: 'Vẽ hình xoắn ốc',
  },
  {
    ques: 'Có mấy bước để tách kênh thành ảnh màu?',
    ans: '5',
  },
  {
    ques: 'Modifier List là gì?',
    ans: 'Nơi mà bạn có thể chọn áp dụng các phép biến đổi',
  },
  {
    ques: 'Giao diện mặc định có mấy khung nhìn?',
    ans: '4',
  },
  {
    ques: 'Thường có mấy định dạng File khi lưu các File?',
    ans: '4',
  },
  {
    ques: 'Make Unique là gì?',
    ans: 'Làm cho 1 phép biến đổi trở thành phép biến đổi chỉ có ở đối tượng được chọn (nút này chỉ hiện khi bạn chọn nhiều hơn một đối tượng và áp dụng cùng một phép biến đổi cho cả 2 đối tượng đó).',
  },
  {
    ques: 'Muốn tạo số trang, các bạn sử dụng công cụ nào?',
    ans: 'Typo Tool',
  },
  {
    ques: 'Định nghĩa nào đúng nhất với tầm quan trọng của Thiết kế môi trường?',
    ans: 'Kết nối trực quan giữa mọi người với các địa điểm',
  },
  {
    ques: 'Để hiển thị hoặc ẩn một bảng điều khiển, Chọn một bảng từ đâu sẽ mở ra nó và mang nó đến phía trước?',
    ans: 'Menu Window',
  },
  {
    ques: 'Đâu là thuật ngữ được sử dụng trong Kỹ thuật thiết kế Đồ họa?',
    ans: 'Photoshop, Illustrator, Indesign, After Effect, 3DsMax,….',
  },
  {
    ques: 'Có tất cả mấy phân ngành cơ bản trong ngành thiết kế Đồ họa?',
    ans: '9',
  },
  {
    ques: 'Canvas size trong Photoshop có tính năng gì?',
    ans: 'Cho phép chúng ta mở rộng size hình nhưng vẫn giữ nguyên kích thước phần ảnh gốc.',
  },
  {
    ques: 'Dạng thiết kế nào phải làm việc với các template chính xác và các phép đo từngmilimet kích thước?',
    ans: 'Thiết kế tem xe',
  },
  {
    ques: 'Phím tắt T nghĩa là gì?',
    ans: 'Công cụ văn bản',
  },
]
