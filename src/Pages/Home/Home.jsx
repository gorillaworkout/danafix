import React, { useState } from "react";
import Header from "../../Component/Header";
import Article from "../../Component/Article";
import Iklan from "../../Component/Iklan";
import "../../Style/Home.scss";
import { Tab, Row, Nav } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import Table from "react-bootstrap/Table";
import ReactPaginate from "react-paginate";

export default function Home() {
  const [defaultData, setDefaultData] = useState([
    {
      tanggalPengajuan: "2023-01-10",
      idKaryawan: "00001",
      namaKaryawan: "Bayu Darmawan",
      jabatan: "Lead Front end",
      tanggalMulai: "03-03-2034",
      gaji: "15.000.000",
      permintaan: "13.000.000",
      biayaLayanan: "49.999",
      pembayaran: "10.000.321",
      status: "Approved",
      statusDate: "03-03-2033",
      managerHR: "Alam Bro",
    },
    {
      tanggalPengajuan: "2023-01-1",
      idKaryawan: "00002",
      namaKaryawan: "Hirano",
      jabatan: "Junior Front end",
      tanggalMulai: "03-03-2033",
      gaji: "10.000.000",
      permintaan: "12.000.000",
      biayaLayanan: "49.999",
      pembayaran: "10.000.321",
      status: "Approved",
      statusDate: "03-03-2033",
      managerHR: "bro mas Bro",
    },
    {
      tanggalPengajuan: "2023-01-10",
      idKaryawan: "00003",
      namaKaryawan: "Bayu",
      jabatan: "babu Front end",
      tanggalMulai: "03-03-2033",
      gaji: "10.000.000",
      permintaan: "12.000.000",
      biayaLayanan: "49.999",
      pembayaran: "10.000.321",
      status: "Approved",
      statusDate: "03-03-2033",
      managerHR: "mas Bro",
    },
    {
      tanggalPengajuan: "2023-01-17",
      idKaryawan: "00004",
      namaKaryawan: "Darmawan",
      jabatan: "asisten Front end",
      tanggalMulai: "03-03-2033",
      gaji: "10.000.000",
      permintaan: "12.000.000",
      biayaLayanan: "49.999",
      pembayaran: "10.000.321",
      status: "Approved",
      statusDate: "03-03-2033",
      managerHR: "Surya mas Bro",
    },
    {
      tanggalPengajuan: "2023-01-30",
      idKaryawan: "00005",
      namaKaryawan: "Miyuki",
      jabatan: "jongos Front end",
      tanggalMulai: "03-03-2033",
      gaji: "10.000.000",
      permintaan: "12.000.000",
      biayaLayanan: "49.999",
      pembayaran: "10.000.321",
      status: "Approved",
      statusDate: "03-03-2033",
      managerHR: "Surya mas Bro",
    },
    {
      tanggalPengajuan: "2023-01-15",
      idKaryawan: "00006",
      namaKaryawan: "Bayu Darmawan",
      jabatan: "purapura Front end",
      tanggalMulai: "03-03-2033",
      gaji: "10.000.000",
      permintaan: "12.000.000",
      biayaLayanan: "49.999",
      pembayaran: "10.000.321",
      status: "Approved",
      statusDate: "03-03-2033",
      managerHR: "Surya mas Bro",
    },
    {
      tanggalPengajuan: "2023-01-18",
      idKaryawan: "00007",
      namaKaryawan: "Hirano",
      jabatan: "yakali Front end",
      tanggalMulai: "03-03-2033",
      gaji: "10.000.000",
      permintaan: "12.000.000",
      biayaLayanan: "49.999",
      pembayaran: "10.000.321",
      status: "Approved",
      statusDate: "03-03-2033",
      managerHR: "Surya mas Bro",
    },
    {
      tanggalPengajuan: "2023-01-9",
      idKaryawan: "00008",
      namaKaryawan: "Bayu",
      jabatan: "yamasa Front end",
      tanggalMulai: "03-03-2033",
      gaji: "10.000.000",
      permintaan: "12.000.000",
      biayaLayanan: "49.999",
      pembayaran: "10.000.321",
      status: "Approved",
      statusDate: "03-03-2033",
      managerHR: "Surya mas Bro",
    },
    {
      tanggalPengajuan: "2023-01-11",
      idKaryawan: "00009",
      namaKaryawan: "Darmawan",
      jabatan: "yakan Front end",
      tanggalMulai: "03-03-2033",
      gaji: "10.000.000",
      permintaan: "12.000.000",
      biayaLayanan: "49.999",
      pembayaran: "10.000.321",
      status: "Approved",
      statusDate: "03-03-2033",
      managerHR: "Surya mas Bro",
    },
    {
      tanggalPengajuan: "2023-01-10",
      idKaryawan: "00010",
      namaKaryawan: "ayam",
      jabatan: "ayam Front end",
      tanggalMulai: "03-03-2033",
      gaji: "10.000.000",
      permintaan: "12.000.000",
      biayaLayanan: "49.999",
      pembayaran: "10.000.321",
      status: "Approved",
      statusDate: "03-03-2033",
      managerHR: "Surya mas Bro",
    },
  ]);
  const [allData, setAllData] = useState([
    {
      tanggalPengajuan: "2023-01-10",
      idKaryawan: "00001",
      namaKaryawan: "Bayu Darmawan",
      jabatan: "Lead Front end",
      tanggalMulai: "03-03-2034",
      gaji: "15.000.000",
      permintaan: "13.000.000",
      biayaLayanan: "49.999",
      pembayaran: "10.000.321",
      status: "Approved",
      statusDate: "03-03-2033",
      managerHR: "Alam Bro",
    },
    {
      tanggalPengajuan: "2023-01-1",
      idKaryawan: "00002",
      namaKaryawan: "Hirano",
      jabatan: "Junior Front end",
      tanggalMulai: "03-03-2033",
      gaji: "10.000.000",
      permintaan: "12.000.000",
      biayaLayanan: "49.999",
      pembayaran: "10.000.321",
      status: "Approved",
      statusDate: "03-03-2033",
      managerHR: "bro mas Bro",
    },
    {
      tanggalPengajuan: "2023-01-10",
      idKaryawan: "00003",
      namaKaryawan: "Bayu",
      jabatan: "babu Front end",
      tanggalMulai: "03-03-2033",
      gaji: "10.000.000",
      permintaan: "12.000.000",
      biayaLayanan: "49.999",
      pembayaran: "10.000.321",
      status: "Approved",
      statusDate: "03-03-2033",
      managerHR: "mas Bro",
    },
    {
      tanggalPengajuan: "2023-01-17",
      idKaryawan: "00004",
      namaKaryawan: "Darmawan",
      jabatan: "asisten Front end",
      tanggalMulai: "03-03-2033",
      gaji: "10.000.000",
      permintaan: "12.000.000",
      biayaLayanan: "49.999",
      pembayaran: "10.000.321",
      status: "Approved",
      statusDate: "03-03-2033",
      managerHR: "Surya mas Bro",
    },
    {
      tanggalPengajuan: "2023-01-30",
      idKaryawan: "00005",
      namaKaryawan: "Miyuki",
      jabatan: "jongos Front end",
      tanggalMulai: "03-03-2033",
      gaji: "10.000.000",
      permintaan: "12.000.000",
      biayaLayanan: "49.999",
      pembayaran: "10.000.321",
      status: "Approved",
      statusDate: "03-03-2033",
      managerHR: "Surya mas Bro",
    },
    {
      tanggalPengajuan: "2023-01-15",
      idKaryawan: "00006",
      namaKaryawan: "Bayu Darmawan",
      jabatan: "purapura Front end",
      tanggalMulai: "03-03-2033",
      gaji: "10.000.000",
      permintaan: "12.000.000",
      biayaLayanan: "49.999",
      pembayaran: "10.000.321",
      status: "Approved",
      statusDate: "03-03-2033",
      managerHR: "Surya mas Bro",
    },
    {
      tanggalPengajuan: "2023-01-18",
      idKaryawan: "00007",
      namaKaryawan: "Hirano",
      jabatan: "yakali Front end",
      tanggalMulai: "03-03-2033",
      gaji: "10.000.000",
      permintaan: "12.000.000",
      biayaLayanan: "49.999",
      pembayaran: "10.000.321",
      status: "Approved",
      statusDate: "03-03-2033",
      managerHR: "Surya mas Bro",
    },
    {
      tanggalPengajuan: "2023-01-9",
      idKaryawan: "00008",
      namaKaryawan: "Bayu",
      jabatan: "yamasa Front end",
      tanggalMulai: "03-03-2033",
      gaji: "10.000.000",
      permintaan: "12.000.000",
      biayaLayanan: "49.999",
      pembayaran: "10.000.321",
      status: "Approved",
      statusDate: "03-03-2033",
      managerHR: "Surya mas Bro",
    },
    {
      tanggalPengajuan: "2023-01-11",
      idKaryawan: "00009",
      namaKaryawan: "Darmawan",
      jabatan: "yakan Front end",
      tanggalMulai: "03-03-2033",
      gaji: "10.000.000",
      permintaan: "12.000.000",
      biayaLayanan: "49.999",
      pembayaran: "10.000.321",
      status: "Approved",
      statusDate: "03-03-2033",
      managerHR: "Surya mas Bro",
    },
    {
      tanggalPengajuan: "2023-01-10",
      idKaryawan: "00010",
      namaKaryawan: "ayam",
      jabatan: "ayam Front end",
      tanggalMulai: "03-03-2033",
      gaji: "10.000.000",
      permintaan: "12.000.000",
      biayaLayanan: "49.999",
      pembayaran: "10.000.321",
      status: "Approved",
      statusDate: "03-03-2033",
      managerHR: "Surya mas Bro",
    },
  ]);

  const render = () => {
    return currentItems.map((val, index) => {
      return (
        <tr key={index + 1}>
          <td>{val.tanggalPengajuan}</td>
          <td>{val.idKaryawan}</td>
          <td>{val.namaKaryawan}</td>
          <td>{val.jabatan}</td>
          <td>{val.tanggalMulai}</td>
          <td>{val.gaji}</td>
          <td>{val.permintaan}</td>
          <td>{val.biayaLayanan}</td>
          <td>{val.pembayaran}</td>
          <td>{val.status}</td>
          <td>{val.statusDate}</td>
          <td>{val.managerHR}</td>
        </tr>
      );
    });
  };

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = allData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(allData.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allData.length;
    setItemOffset(newOffset);
  };

  const onInputStartDate = (value) => {
    setStartDate(value);
    if (endDate !== null) {
      const filterDate = defaultData.filter((val, index) => {
        let startDates = new Date(startDate);
        let endDates = new Date(value);
        let valueDates = new Date(val.tanggalPengajuan);
        if (valueDates > startDates && valueDates < endDates) {
          return val;
        }
      });
      setAllData(filterDate);
    } else {
      setAllData(defaultData);
    }
  };

  const onInputEndDate = (value) => {
    setEndDate(value);
    if (startDate) {
      const filterDate = defaultData.filter((val, index) => {
        console.log(val.tanggalPengajuan, index);
        let startDates = new Date(startDate);
        let endDates = new Date(value);
        let valueDates = new Date(val.tanggalPengajuan);
        if (valueDates > startDates && valueDates < endDates) {
          return val;
        }
      });
      setAllData(filterDate);
    } else {
      setAllData(defaultData);
    }
  };

  const onSearching = (value) => {
    if (value.length > 3) {
      let filter = defaultData.filter((val, index) => {
        if (val.tanggalPengajuan.toUpperCase().includes(value.toUpperCase())) {
          return val;
        } else if (val.idKaryawan.toUpperCase().includes(value.toUpperCase())) {
          return val;
        } else if (
          val.namaKaryawan.toUpperCase().includes(value.toUpperCase())
        ) {
          return val;
        } else if (val.jabatan.toUpperCase().includes(value.toUpperCase())) {
          return val;
        } else if (
          val.tanggalMulai.toUpperCase().includes(value.toUpperCase())
        ) {
          return val;
        } else if (val.gaji.toUpperCase().includes(value.toUpperCase())) {
          return val;
        } else if (val.permintaan.toUpperCase().includes(value.toUpperCase())) {
          return val;
        } else if (
          val.biayaLayanan.toUpperCase().includes(value.toUpperCase())
        ) {
          return val;
        } else if (val.pembayaran.toUpperCase().includes(value.toUpperCase())) {
          return val;
        } else if (val.status.toUpperCase().includes(value.toUpperCase())) {
          return val;
        } else if (val.statusDate.toUpperCase().includes(value.toUpperCase())) {
          return val;
        } else if (val.managerHR.toUpperCase().includes(value.toUpperCase())) {
          return val;
        }
      });
      console.log(filter,' filter')
      setAllData(filter)
    }else {
      setAllData(defaultData)
    }
  };
  return (
    <>
      <Header />
      <div className="card-home">
        <div className="header-menu">
          <Tab.Container defaultActiveKey={1} className="tab-container">
            <Nav variant="tabs">
              {/* <Row> */}
              <Nav.Item>
                <Nav.Link eventKey={1}>Pengajuan</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey={2}>EWA</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey={3}>Permintaan Pembayaran</Nav.Link>
              </Nav.Item>
              {/* </Row> */}
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey={1}>
                <div>
                  <p>Tertunda</p>
                  <p>Riwayat</p>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey={2}>
                <div>
                  <p>Tertunda 2</p>
                  <p>Riwayat 2</p>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey={3}>
                <div>
                  <p>Tertunda 3</p>
                  <p>Riwayat 3</p>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
        <div className="card-menu">
          <h3>Riwayat pengajuan</h3>
          <p>Tanggal Pengajuan</p>
          <div className="card-pengajuan">
            <div className="date-pengajuan">
              <input
                type="date"
                onChange={(e) => onInputStartDate(e.target.value)}
              />
              <p> to </p>
              <input
                type="date"
                onChange={(e) => onInputEndDate(e.target.value)}
              />
            </div>
            <div className="searching">
              <BsSearch className="icon-searching" />
              <input
                type="text"
                placeholder="Pencarian"
                onChange={(e) => onSearching(e.target.value)}
              />
            </div>
          </div>
          <div className="card-table">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Tanggal Pengajuan</th>
                  <th>ID karyawan</th>
                  <th>Nama Karyawan</th>
                  <th>Jawaban</th>
                  <th>Tanggal Mulai Kerja</th>
                  <th>Gaji</th>
                  <th>Permintaan</th>
                  <th>Biaya Layanan (Rp)</th>
                  <th>Pembayaran(Rp)</th>
                  <th>Status</th>
                  <th>Status date</th>
                  <th>Manager HR</th>
                </tr>
              </thead>
              <tbody>{render()}</tbody>
            </Table>
          </div>
          <div className="pagination-card">
            <ReactPaginate
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              containerClassName={"pagination"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              activeClassName={"active"}
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
            />
          </div>
        </div>
      </div>
    </>
  );
}
