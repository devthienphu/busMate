const bus = [{
        name: "Tuyến số 01",
        number: 1,
        sStation: "Bến Thành",
        eStation: "Bến xe buýt chợ lớn",
        distance: 8,
        dailyTrip: 86,
        sTime: "05:00",
        eTime: "20:30",
        unitPrice: 5,
        monthlyPrice: 125,
        stoppingStation1: [{
            nameStation: "Bến Bạch Đằng",
            afterDepartTime: 10
        }, {
            nameStation: "Trường Cao Thắng",
            afterDepartTime: 10
        }, {
            nameStation: "Trường Cao đẳng Kinh tế Đối ngoại",
            afterDepartTime: 15
        }, {
            nameStation: "Nhà Văn hóa Quận 5",
            afterDepartTime: 5
        }, {
            nameStation: "Bến xe Chợ Lớn",
            afterDepartTime: 15
        }],
        stoppingStation2: [{
            nameStation: "Chu Văn An",
            afterDepartTime: 10
        }, {
            nameStation: "Đại học Sư phạm Thể dục thể thao",
            afterDepartTime: 10
        }, {
            nameStation: "Nhà Văn hóa Quận 5",
            afterDepartTime: 15
        }, {
            nameStation: "Nam Kỳ Khởi Nghĩa",
            afterDepartTime: 5
        }, {
            nameStation: "Công Trường Mê Linh",
            afterDepartTime: 15
        }],
        rating: []
    }, {
        name: "Tuyến số 03",
        number: 3,
        sStation: "Bến Thành",
        eStation: "Thạnh Lộc",
        distance: 20,
        dailyTrip: 260,
        sTime: "04:55",
        eTime: "20:45",
        unitPrice: 6,
        monthlyPrice: 150,
        stoppingStation1: [{
            nameStation: "Trường Emst Thalmann",
            afterDepartTime: 10
        }, {
            nameStation: "Bệnh viện Nhi Đồng 2",
            afterDepartTime: 10
        }, {
            nameStation: "Công viên Lê Văn Tám",
            afterDepartTime: 15
        }, {
            nameStation: "Chùa Vạn Hạnh",
            afterDepartTime: 5
        }, {
            nameStation: "THẠNH XUÂN ",
            afterDepartTime: 15
        }],
        stoppingStation2: [{
            nameStation: "Cây xăng Thanh Bình",
            afterDepartTime: 10
        }, {
            nameStation: "Ngã tư Ga",
            afterDepartTime: 10
        }, {
            nameStation: "Ngã ba Đào Duy Anh",
            afterDepartTime: 15
        }, {
            nameStation: "Công viên Lê Văn Tám",
            afterDepartTime: 5
        }, {
            nameStation: "Bến xe buýt Sài Gòn",
            afterDepartTime: 15
        }],
        rating: []
    }, {
        name: "Tuyến số 04",
        number: 4,
        sStation: "Bến Thành",
        eStation: "Bến Xe An Sương",
        distance: 16,
        dailyTrip: 120,
        sTime: "05:30",
        eTime: "20:30",
        unitPrice: 6,
        monthlyPrice: 150,
        stoppingStation1: [{
            nameStation: "Nam Kỳ Khởi Nghĩa",
            afterDepartTime: 10
        }, {
            nameStation: "Viện Pasteur",
            afterDepartTime: 10
        }, {
            nameStation: "Bệnh viện Quận Phú Nhuận",
            afterDepartTime: 15
        }, {
            nameStation: "Bitis",
            afterDepartTime: 5
        }, {
            nameStation: "Bến xe An Sương",
            afterDepartTime: 15
        }],
        stoppingStation2: [{
            nameStation: "Chùa Vĩnh Phước",
            afterDepartTime: 10
        }, {
            nameStation: "Pico Plaza",
            afterDepartTime: 10
        }, {
            nameStation: "Điện Biên Phủ ",
            afterDepartTime: 15
        }, {
            nameStation: "Trường CĐKT Cao Thắng ",
            afterDepartTime: 5
        }, {
            nameStation: "Bến xe buýt Sài Gòn",
            afterDepartTime: 15
        }],
        rating: []
    },
    {
        name: "Tuyến số 05",
        number: 5,
        sStation: "Bến Xe buýt Chợ Lớn",
        eStation: "Bến xe Biên Hòa",
        distance: 38,
        dailyTrip: 36,
        sTime: "05:00",
        eTime: "17:50",
        unitPrice: 10,
        monthlyPrice: 250,
        stoppingStation1: [{
            nameStation: "Tháp Mười",
            afterDepartTime: 10
        }, {
            nameStation: "Bệnh viện Chợ Rẫy",
            afterDepartTime: 10
        }, {
            nameStation: "Hòa Hảo",
            afterDepartTime: 15
        }, {
            nameStation: "Pasteur",
            afterDepartTime: 5
        }, {
            nameStation: "Bến xe Biên Hòa",
            afterDepartTime: 15
        }],
        stoppingStation2: [{
            nameStation: "Big C",
            afterDepartTime: 10
        }, {
            nameStation: "Cầu vượt Linh Xuân",
            afterDepartTime: 10
        }, {
            nameStation: "Ngã 3 Hiệp Bình",
            afterDepartTime: 15
        }, {
            nameStation: "Hồ Con Rùa",
            afterDepartTime: 20
        }, {
            nameStation: "Bến xe Chợ Lớn",
            afterDepartTime: 15
        }],
        rating: []
    },
    {
        name: "Tuyến số 06",
        number: 6,
        sStation: "Bến Xe buýt Chợ Lớn",
        eStation: "Đại học Nông Lâm",
        distance: 26,
        dailyTrip: 120,
        sTime: "04:55",
        eTime: "20:30",
        unitPrice: 7,
        monthlyPrice: 175,
        stoppingStation1: [{
            nameStation: "Thuận Kiều Plaza",
            afterDepartTime: 10
        }, {
            nameStation: "Đại học Sài Gòn",
            afterDepartTime: 10
        }, {
            nameStation: "Nhà Văn Hóa Lao Động",
            afterDepartTime: 15
        }, {
            nameStation: "Pasteur",
            afterDepartTime: 5
        }, {
            nameStation: "Đại học Nông Lâm",
            afterDepartTime: 15
        }],
        stoppingStation2: [{
            nameStation: "Khu Công nghệ cao Q9",
            afterDepartTime: 10
        }, {
            nameStation: "Trường Đại học Sư phạm Kỹ thuật",
            afterDepartTime: 10
        }, {
            nameStation: "Ngã 4 Bình Thái",
            afterDepartTime: 15
        }, {
            nameStation: "Cầu Đen",
            afterDepartTime: 20
        }, {
            nameStation: "Bến xe Chợ Lớn",
            afterDepartTime: 15
        }],
        rating: []
    }, {
        name: "Tuyến số 07",
        number: 7,
        sStation: "Bến Xe buýt Chợ Lớn",
        eStation: "Gò vấp",
        distance: 15,
        dailyTrip: 114,
        sTime: "05:00",
        eTime: "19:30",
        unitPrice: 6,
        monthlyPrice: 150,
        stoppingStation1: [{
            nameStation: "Bưu điện Quận 5",
            afterDepartTime: 10
        }, {
            nameStation: "Đại học Kinh tế",
            afterDepartTime: 10
        }, {
            nameStation: "Trần Quang Diệu",
            afterDepartTime: 15
        }, {
            nameStation: "Cầu vượt Nguyễn Thái Sơn - Nguyễn Kiệm",
            afterDepartTime: 5
        }, {
            nameStation: "BÃI HẬU CẦN SỐ 1",
            afterDepartTime: 15
        }],
        stoppingStation2: [{
            nameStation: "UBND Phường 5",
            afterDepartTime: 10
        }, {
            nameStation: "Bệnh Viện 175",
            afterDepartTime: 10
        }, {
            nameStation: "Đại học kinh tế",
            afterDepartTime: 15
        }, {
            nameStation: "Bưu điện Quận 5",
            afterDepartTime: 20
        }, {
            nameStation: "Bến xe Chợ Lớn",
            afterDepartTime: 15
        }],
        rating: []
    },
    {
        name: "Tuyến số 08",
        number: 8,
        sStation: "Bến Xe Buýt Quận 8",
        eStation: "Đại học Quốc Gia",
        distance: 33,
        dailyTrip: 280,
        sTime: "04:40",
        eTime: "20:30",
        unitPrice: 7,
        monthlyPrice: 175,
        stoppingStation1: [{
            nameStation: "Chợ Xóm Củi",
            afterDepartTime: 10
        }, {
            nameStation: "Nhà thi đấu Phú Thọ",
            afterDepartTime: 10
        }, {
            nameStation: "Chợ Tân Bình",
            afterDepartTime: 15
        }, {
            nameStation: "Siêu Thị Big C",
            afterDepartTime: 5
        }, {
            nameStation: "Đại học Quốc gia",
            afterDepartTime: 15
        }],
        stoppingStation2: [{
            nameStation: "KTX Khu A ĐH Quốc Gia TPHCM",
            afterDepartTime: 10
        }, {
            nameStation: "Nhà Sách Thủ Đức",
            afterDepartTime: 10
        }, {
            nameStation: "Nhà thờ Hàng Xanh ",
            afterDepartTime: 15
        }, {
            nameStation: "Siêu thị Big C",
            afterDepartTime: 20
        }, {
            nameStation: "Chùa Pháp Quang",
            afterDepartTime: 15
        }],
        rating: []
    },
    {
        name: "Tuyến số 09",
        number: 9,
        sStation: "Bến Xe Buýt Chợ Lớn",
        eStation: "Hưng Long",
        distance: 25,
        dailyTrip: 170,
        sTime: "05:25",
        eTime: "19:10",
        unitPrice: 7,
        monthlyPrice: 175,
        stoppingStation1: [{
            nameStation: "Hưng Long - Bình Chánh",
            afterDepartTime: 10
        }, {
            nameStation: "SinCo",
            afterDepartTime: 10
        }, {
            nameStation: "Chợ Bình Chánh ",
            afterDepartTime: 15
        }, {
            nameStation: "Chùa Liên Hoa",
            afterDepartTime: 5
        }, {
            nameStation: "Nguyễn Văn Thời ",
            afterDepartTime: 15
        }],
        stoppingStation2: [{
            nameStation: "Trạm Xăng Hòa Hiệp",
            afterDepartTime: 10
        }, {
            nameStation: "Ủy ban xã Hưng Long",
            afterDepartTime: 10
        }, {
            nameStation: "Điện máy Lộc Đức",
            afterDepartTime: 15
        }, {
            nameStation: "Công viên Phú Lâm",
            afterDepartTime: 20
        }, {
            nameStation: "Lò Siêu",
            afterDepartTime: 15
        }],
        rating: []
    },
    {
        name: "Tuyến số 10",
        number: 10,
        sStation: "Đại học Quốc Gia",
        eStation: "Bến xe Miền Tây",
        distance: 31,
        dailyTrip: 84,
        sTime: "05:00",
        eTime: "18:45",
        unitPrice: 7,
        monthlyPrice: 175,
        stoppingStation1: [{
            nameStation: "Đại học Khoa học xã hội và Nhân văn",
            afterDepartTime: 10
        }, {
            nameStation: "Ngã 4 Bình Thái",
            afterDepartTime: 10
        }, {
            nameStation: "Học viện Hành chính Quốc gia",
            afterDepartTime: 15
        }, {
            nameStation: "CoopMart",
            afterDepartTime: 5
        }, {
            nameStation: "Mũi Tàu Phú Lâm",
            afterDepartTime: 15
        }],
        stoppingStation2: [{
            nameStation: "CoopMart",
            afterDepartTime: 10
        }, {
            nameStation: "Đại học Y Dược",
            afterDepartTime: 10
        }, {
            nameStation: "Cách Mạng tháng 8",
            afterDepartTime: 15
        }, {
            nameStation: "Khu QLGTDT số 2",
            afterDepartTime: 20
        }, {
            nameStation: "Vành đai ĐHQG TPHCM ",
            afterDepartTime: 15
        }],
        rating: []
    }
]
module.exports = bus;