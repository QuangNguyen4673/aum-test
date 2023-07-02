const set1 = [
  {
    question: 'Default size là tính\nnăng gì?',
    answer: 'Xác lập width và\nheight của lưới cực.',
  },
  {
    question: 'Vẽ ngôi sao bằng Pen Tool trong Adobe InDesign có mấy bước?',
    answer: '5',
  },
  {
    question: 'Hình ảnh trực quan là đặc trưng mạnh mẽ cho dạng thiết kế nào?',
    answer: 'Thiết kế Nhận diện thương hiệu',
  },
  {
    question: 'Có mấy cách để tạo Mặt phẳng (Plane)?',
    answer: '2',
  },
  {
    question: 'Lệnh nào sau đây không thuộc Geometry?',
    answer: 'Rubik',
  },
  {
    question: 'Có bao nhiêu chế độ hiển thị trong Indesign?',
    answer: '3',
  },
  {
    question:
      'Menu, micro-interactions và button là những thuật ngữ thuộc dạng thiết kế nào?',
    answer: 'Thiết kế UI',
  },
  {
    question:
      'Chọn bảng bạn muốn mở (nếu không nhìn thấy, chọn nó từ menu Window), và sau đó bước tiếp theo thao tác như thế nào?',
    answer:
      'Chọn undock Panel hoặc undock Frame từ trình đơn bảng điều khiển. Khung undock undocks nhóm bảng.',
  },
  {
    question:
      'Để chọn một tài liệu mới, chọn File | New từ menu chính, phím tắt là gì?',
    answer: 'Ctrl N',
  },
  {
    question: 'Tùy chọn nào sau đây thuộc tùy chọn Blend?',
    answer: 'Smooth Color',
  },
  {
    question:
      'Dạng thiết kế nào có sự hạn chế kích thước trong in ấn mà nhiều nhà thiết kế phải dùng Template mẫu?',
    answer: 'Thiết kế họa tiết trang phục',
  },
  {
    question: 'Chọn công cụ gì để tạo văn bản xung quanh Path?',
    answer: 'Horizontal/Vertical Type',
  },
  {
    question: 'Đâu không phải lợi ích của ngành thiết kế Đồ họa?',
    answer: 'Tính chất công việc không cần bắt kịp xu thế',
  },
  {
    question: 'Point là gì?',
    answer: 'Điểm',
  },
  {
    question:
      'Vùng phóng đại hiển thị mức độ phóng đại của tài liệu là bao nhiêu?',
    answer: 'Có thể là bất kì số giữa 3,13% và 6400%',
  },
  {
    question: 'Lệnh Liquify thuộc Menu tool nào?',
    answer: 'Filter',
  },
  {
    question: 'Dựng mô hình 3D đồng nghĩa với sử dụng những trục nào?',
    answer: 'Tất cả các đáp án trên đều đúng',
  },
  {
    question: 'Lệnh Egg là gì?',
    answer: 'Vẽ hình kiểu quả trứng',
  },
  {
    question:
      'Opacity càng nhỏ thì các pixel ảnh trên layer càng trong suốt. Đúng hay sai?',
    answer: 'Đúng',
  },
  {
    question: 'Bleed & Slug nghĩa là gì?',
    answer:
      'Khoảng cách mở rộng đến rìa trang giấy khi in và khoảng cách dùng đánh số trang.',
  },
  {
    question: 'Nhắc đến Photoshop là nhắc đến?',
    answer: 'Pixel',
  },
  {
    question: 'Tỷ lệ 1:1.61 có nghĩa là gì?',
    answer: 'Tỷ lệ vàng',
  },
  {
    question: 'Có bao nhiêu tùy chọn trên bảng Pages (Window/Pages)?',
    answer: '5',
  },
  {
    question:
      'Thay đổi số bước phục hồi bằng lệnh Undo, cần phải thao tác như thế nào?',
    answer:
      'Customize/Preference/ Chọn tab GeneralTrong mục Scene Undo tăng hoặc giảm Level',
  },
  {
    question: 'Vẽ hình vòng xuyến là lệnh gì?',
    answer: 'Lệnh Donut',
  },
  {
    question: 'Màu Background là màu gì?',
    answer: 'Xác định màu nền mặc định của layer',
  },
  {
    question: 'Chế độ nào không thuộc chế độ màu chỉnh sửa hình ảnh?',
    answer: 'Multi media',
  },
  {
    question:
      'Các yếu tố như kiểu chữ, văn bản, bố cục, minh họa và hình ảnh, in ấn thuộc dạng thiết kế nào?',
    answer: 'Thiết kế xuất bản và in ấn',
  },
  {
    question: 'Cách nào sau đây không thể sao chép đối tượng trong vùng chọn?',
    answer: 'Vào Select à Deselect (Ctrl+D)',
  },
  {
    question:
      'Số lượng mảnh ghép để tạo th ành hình cầu (nếu số lượng này nhỏ sẽ được các dạng hình học khác) là lệnh gì?',
    answer: 'Segments',
  },
  {
    question: 'Eyedroper Tool (I) có tính năng gì?',
    answer:
      'Cho phép bấm lên bất cứ đối tượng nào trên màn hình có màu, để sao chép mẫu màu viền hoặc nền',
  },
  {
    question: 'Có bao nhiêu thông tin về các bảng Tools?',
    answer: '13',
  },
  {
    question:
      'Bạn có thể chỉ định cách bạn muốn After Effects để giải thích các thuộc tính như tốc độ khung hình và tỉ lệ pixel thuộc bước nào?',
    answer: 'Nhập vào và tổ chức cảnh',
  },
  {
    question:
      'Các sản phẩm như billboard, bảng quảng cáo, bảng hiệu, banner, hồ sơ xã hội, brochure kỹ thuật số, email marketing, và các nội dung kỹ thuật số khác thuộc phân loại Thiết kế nào?',
    answer: 'Thiết kế Truyền thông Marketing',
  },
  {
    question: 'UI là gì?',
    answer: 'Giao diện người dùng',
  },
  {
    question: 'Để hiển thị hoặc ẩn một công cụ, thao tác như thế nào?',
    answer:
      'Chọn Edit> Preferences> General (Windows) hoặc After Effects> Preferences>General (hệ điều hành Mac).Chọn hoặc bỏ chọn Hiển thị Công cụ',
  },
  {
    question: 'Phím tắt Ctrl O là gì?',
    answer: 'Mở file',
  },
  {
    question: 'Nhà Thiết kế Đồ Họa có cần biết ngoại ngữ hay không?',
    answer: 'Biết cơ bản đủ dùng để giao tiếp và đọc tài liệu',
  },
  {
    question: 'Mặt nạ là gì?',
    answer:
      'Mặt nạ được xem như một layer trung gian chia layer hiện tại thành 2 khu vực: thấy (chỉnh sửa được) và không thấy (không chỉnh sửa được).',
  },
  {
    question: 'Công cụ Fill arc có tính năng gì?',
    answer: 'Tô đầy cung (cho dù Opened hoặc closed) bằng màu tô hiện hành.',
  },
  {
    question:
      'Để thiết lập hoặc thay đổi số Artboard trong tài liệu mở, có tất cả bao nhiêu bước?',
    answer: '7',
  },
  {
    question: 'Rectangular Marquee thuộc nhóm công cụ nào?',
    answer: 'Nhóm Marquee (M)',
  },
  {
    question: 'Để Setup Projects, tại hàng Timecode base, chọn fpt nào?',
    answer: '25',
  },
  {
    question: 'F là phím tắt của tính năng gì?',
    answer: 'Chế độ xem ảnh',
  },
  {
    question: 'Thao tác Windows | Type | paragraph thuộc tính năng nào?',
    answer: 'Panel paragraph',
  },
  {
    question: 'Cách thiết lập Workspace ở Bước đầu tiên diễn ra như thế nào?',
    answer: 'Chọn Window | Workspace | New Workspace',
  },
  {
    question: 'Artboard là gì?',
    answer: 'Artboard là vùng hình chữ nhật hiện hành trong Workspace',
  },
  {
    question: 'Nếu bảng điều khiển không hiển thị, chọn nó từ đâu để mở nó?',
    answer: 'Menu Window',
  },
  {
    question:
      'Ở phần Files of type bạn sẽ nhìn thấy những file mà AE cho phép import. PhầnTarga sequence sẽ active nếu bạn có một chuỗi hình được đánh thứ tự liền nhau, sau khi import vào, bạn kéo được bao nhiêu files từ Project panel thả vào Timeline panel?',
    answer: 'Rất nhiều',
  },
  {
    question: 'Để sử dụng Workspace mới, chọn tên của nó từ đâu?',
    answer: 'Menu',
  },
  {
    question: 'Tip nếu bạn muốn tạo khối lập phương?',
    answer: 'Trước khi vẽ hãy chọn trên bảng cuộn Creation Method là Cube.',
  },
  {
    question: 'Tầm quan trọng của thiết kế bao bì là gì?',
    answer:
      'Là ấn tượng đầu tiên của khách hàng khi nhìn thấy sản phẩm để họ quyết định có mua hay không',
  },
  {
    question:
      'Với không gian làm việc mà bạn muốn khôi phục lại hoạt động, thao tác như thế nào?',
    answer:
      'Chọn Window> Workspace> Reset [tên không gian làm việc], và sau đó nhấp vào Huỷ Thay đổi.',
  },
  {
    question: 'Để điều chỉnh kích thước của từng panel, cần làm cách nào?',
    answer: 'Bằng cách đưa con trỏ chuột vào giữa hai panel',
  },
  {
    question: 'Photoshop gồm tất cả bao nhiêu bộ lọc?',
    answer: '97',
  },
  {
    question:
      'Để tô màu đơn, click giữ chuột trái và di chuyển chuột để vẽ được gì?',
    answer: 'A & B đều đúng',
  },
  {
    question:
      'Trong illustrator để có thể gọi ra lệnh Pathfinder bằng mấy cách?',
    answer: '2',
  },
  {
    question: 'Tính năng nào sau đây không thuộc Panel?',
    answer: 'Zoom',
  },
  {
    question: 'Nhà thiết kế UI sẽ thường làm việc với ai?',
    answer: 'Nhà thiết kế UX',
  },
  {
    question: 'Công cụ nào sau đây không thuộc nhóm công cụ Shape?',
    answer: 'Line',
  },
  {
    question:
      'Để di chuyển màn hình theo chiều ngang, ta cần phải thao tác như thế nào?',
    answer: 'Giữ phím Shift khi bạn cuộn chuột phía sau hoặc phía trước',
  },
  {
    question: 'Công dụng của Magic Eraser là gì?',
    answer: 'Xóa vùng hình ảnh có màu tương đồng',
  },
  {
    question: 'Adobe Photoshop là gì?',
    answer: 'Phần mềm thiết kế và xử\nlý hình ảnh chuyên nghiệp',
  },
  {
    question: 'Insert Column và Insert Row thuộc thao tác nào trong Indesign?',
    answer: 'Tạo bảng trong Indesign',
  },
  {
    question: 'Có bao nhiêu loại hình dạng (Shapes) cơ bản?',
    answer: '3',
  },
  {
    question: 'Chế độ nào không phải Blend màu trong Indesign?',
    answer: 'Stroke',
  },
  {
    question: 'Nêu cách làm việc với các Palette?',
    answer: 'Tất cả các đáp án trên đều đúng',
  },
  {
    question: 'Kỹ thuật Thiết kế Đồ họa là gì?',
    answer: 'Tất cả các đáp án trên đều đúng',
  },
  {
    question: 'Để sử dụng một không gian làm việc Adobe, thao tác như thế nào?',
    answer: 'Chọn Window > Workspace',
  },
  {
    question: 'Có bao nhiêu bước để tạo ra một Project?',
    answer: '6',
  },
  {
    question:
      'Để tạo text có mạng lưới cong, chọn khối text bằng công cụ Selection và sau đó thao tác như thế nào?',
    answer:
      'Chọn Object | Envelope Distort | Make with Mesh khi hộp thoại Mesh Options mở ra, chọn số hàng và số cột mong muốn và nhấp OK.',
  },
  {
    question: 'Lúc bắt đầu một dự án, điều đầu tiên mà bạn cần làm là gì?',
    answer: 'Tạo một tài liệu mới',
  },
  {
    question:
      'Màu foreground và background mặc định ban đầu trong phần mềm khi tạo khổ giấy là màu gì?',
    answer: 'Đen – Trắng',
  },
  {
    question:
      'Nhà thiết kế nhận diện thương hiệu thường làm việc cùng với những ai?',
    answer: 'Đáp án A&B',
  },
  {
    question: 'Timeline có tính năng gì?',
    answer: 'Điều khiển animation, effects… theo thời gian.',
  },
  {
    question:
      'Trong bài học, các hình ảnh minh họa được dùng trong phiên bản Photoshop nào?',
    answer: 'CC2015',
  },
  {
    question: 'Để hiển thị menu ngữ cảnh, ta cần phải thao tác như thế nào?',
    answer:
      'Để hiển thị menu ngữ cảnh, nhấn chuột phải (Windows) hoặc bấm điều khiển và giữ nút chuột (Mac OS).',
  },
  {
    question: 'Photoshop thuộc bản quyền hãng nào?',
    answer: 'Adobe',
  },
  {
    question: 'Tạo chữ Drop Cap là gì?',
    answer:
      'Là tạo những chữ cái tùy ý, thông thường là chữ cái đầu của nội dung hiển thị lớn hơn các chữ khác theo một phong cách riêng biệt để dễ dàng nhận biết đâu là đoạn đầu của nội dung.',
  },
  {
    question:
      'Ưu điểm của Indesign là có hệ màu được thiết lập gần giống với phần mềm nào?',
    answer: 'Illustrator',
  },
  {
    question: 'Vẽ các đường cong bằng Pen Tool trong indesign cần có mấy bước?',
    answer: '6',
  },
  {
    question: 'Khi nhiều Artboard được phát hiện, nút nào được kích hoạt?',
    answer: 'Tất cả các đáp án trên đều đúng',
  },
  {
    question: 'Erase Tool có tính năng gì?',
    answer: 'Công cụ xoá',
  },
  {
    question: 'Creation Method là gì?',
    answer: 'Cách tạo khối cầu',
  },
  {
    question: 'Khởi động chương trình Photoshop bằng cách nào?',
    answer: 'Click đôi chuột lên biểu tượng Adobe Photoshop trên desktop.',
  },
  {
    question: 'Màu Dodge là gì?',
    answer:
      'Làm sáng màu cơ bản để phản ánh màu pha trộn. Trộn với màu đen không tạo ra sự thay đổi.',
  },
  {
    question: 'Lệnh Helix là gì?',
    answer: 'Vẽ hình xoắn ốc',
  },
  {
    question: 'Có mấy bước để tách kênh thành ảnh màu?',
    answer: '5',
  },
  {
    question: 'Modifier List là gì?',
    answer: 'Nơi mà bạn có thể chọn áp dụng các phép biến đổi',
  },
  {
    question: 'Giao diện mặc định có mấy khung nhìn?',
    answer: '4',
  },
  {
    question: 'Thường có mấy định dạng File khi lưu các File?',
    answer: '4',
  },
  {
    question: 'Make Unique là gì?',
    answer:
      'Làm cho 1 phép biến đổi trở thành phép biến đổi chỉ có ở đối tượng được chọn (nút này chỉ hiện khi bạn chọn nhiều hơn một đối tượng và áp dụng cùng một phép biến đổi cho cả 2 đối tượng đó).',
  },
  {
    question: 'Muốn tạo số trang, các bạn sử dụng công cụ nào?',
    answer: 'Typo Tool',
  },
  {
    question:
      'Định nghĩa nào đúng nhất với tầm quan trọng của Thiết kế môi trường?',
    answer: 'Kết nối trực quan giữa mọi người với các địa điểm',
  },
  {
    question:
      'Để hiển thị hoặc ẩn một bảng điều khiển, Chọn một bảng từ đâu sẽ mở ra nó và mang nó đến phía trước?',
    answer: 'Menu Window',
  },
  {
    question: 'Đâu là thuật ngữ được sử dụng trong Kỹ thuật thiết kế Đồ họa?',
    answer: 'Photoshop, Illustrator, Indesign, After Effect, 3DsMax,….',
  },
  {
    question: 'Có tất cả mấy phân ngành cơ bản trong ngành thiết kế Đồ họa?',
    answer: '9',
  },
  {
    question: 'Canvas size trong Photoshop có tính năng gì?',
    answer:
      'Cho phép chúng ta mở rộng size hình nhưng vẫn giữ nguyên kích thước phần ảnh gốc.',
  },
  {
    question:
      'Dạng thiết kế nào phải làm việc với các template chính xác và các phép đo từngmilimet kích thước?',
    answer: 'Thiết kế tem xe',
  },
  {
    question: 'Phím tắt T nghĩa là gì?',
    answer: 'Công cụ văn bản',
  },
  {
    question:
      'Bạn có thể sử dụng nhiều màn hình để tăng gì cho màn hình có sẵn?',
    answer: 'Không gian',
  },
  {
    question:
      'Nhấn phím nào để làm ẩn hoặc hiện tất cả các bảng có trên màn hình (trừ thanh toolbox)?',
    answer: 'Tab',
  },
  {
    question: 'Phân cột cho text trong 1 trang thuộc đặc tính nào?',
    answer: 'Columns',
  },
  {
    question: 'Height Segments là gì?',
    answer:
      'Số đoạn cắt ngang của khối nón (số lượng càng lớn thì khối nón càng mượt nhưng sẽ ảnh hưởng đến tốc độ của máy).',
  },
  {
    question: 'After Effects (AE) tương thích với phần mềm nào?',
    answer: 'Photoshop',
  },
  {
    question: 'Các xác lập điển hình tối thiểu trong Blend là bao nhiêu?',
    answer: '0,25 inch',
  },
  {
    question:
      '3Ds max là một trong những chương trình giúp bạn tạo ra và diễn hoạt các vật thể mấy chiều?',
    answer: '3',
  },
  {
    question: 'Rulers trong Indesign thể hiện điều gì?',
    answer:
      'Thể hiện thước làm việc dọc và ngang của chương trình., Thể hiện thước làm việc dọc và ngang của chương trình.',
  },
  {
    question: 'Lệnh Unite có nguyên lý là gì?',
    answer:
      'Giúp cho các bạn gộp tất cả các đối tượng vector được lựa chọn thành một đối tượng vector mới duy nhất.',
  },
  {
    question:
      'Phân nhóm một bảng điều khiển cho biết thêm nó vào một nhóm hiện có, đặt nó ở đâu của thứ tự xếp chồng?',
    answer: 'Trên cùng',
  },
  {
    question: 'Viewport là gì?',
    answer:
      'Vùng nhìn cho phép ta quan sát đối tượng từ nhiều góc độ khác nhau',
  },
  {
    question: 'Có bao nhiêu phép xử lý và biến đổi hình dạng?',
    answer: '4',
  },
  {
    question:
      'Nơi đặt tạm các nội dung cũng như các thao tác phục vụ cho tài liệu. Các nội dung đặt trên vùng này sẽ không được thể hiện khi in ấn là vùng gì?',
    answer: 'Vùng nháp',
  },
  {
    question: 'Bạn có thể di chuyển các panel bằng cách nào sau đây?',
    answer: 'Tất cả các đáp án trên đều đúng',
  },
  {
    question:
      'Các Panel của Illustrator được đặt trong “dock” dọc theo phía phải của màn hình để làm gì?',
    answer: 'Tất cả các đáp án trên đều đúng',
  },
  {
    question: 'Line Tool có được coi là Shape có sẵn hay không?',
    answer: 'Có',
  },
  {
    question: '3Dsmax còn có bao nhiêu lệnh đặc biệt liên quan dến tập tin?',
    answer: '4',
  },
  {
    question: 'Color Wheel có nghĩa là gì?',
    answer: 'Vòng tròn thuần sắc',
  },
  {
    question: 'Định nghĩa nào đúng với Show Center mark của Artboard?',
    answer:
      'Nhấp ở đây để thêm một đường hướng dẫn dấu tâm màu xanh lá cây vào Artboard được chọn.',
  },
  {
    question:
      'Để làm sáng tối cho các giao diện người dùng, Chọn Edit Preferences tiếp theo thác tác như thế nào?',
    answer: 'Màu sắc giao diện người dùng',
  },
]

export { set1 }
