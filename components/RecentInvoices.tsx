import React from 'react'

// Interface Data Tables
interface InterfaceDataTables {
	id: number,
	tanggal: string,
	klien: string,
	jumlah: number,
	status: string
}

// Data Tables Components
const DataTables = ( props: InterfaceDataTables ) => {
	const { id, tanggal, klien, jumlah, status } = props
	return (
		<tr className="text-left">
			<th className="font-normal px-4 py-3">{ id }</th>
			<th className="font-normal px-4 py-3">{ tanggal }</th>
			<th className="font-normal px-4 py-3">{ klien }</th>
			<th className="font-normal px-4 py-3">{ jumlah }</th>
			<th className="font-normal px-4 py-3">{ status }</th>
		</tr>
	)
}

// Recent Invoice Components
const RecentInvoices = () => {
       return (
              <React.Fragment>
                     {/* Heading Recent Invoices */}
                     <div className="flex justify-between items-center">
                            <h1 className="font-bold text-heading-sm">Tagihan baru saja</h1>
                            <a href="/admin/dashboard/recent-invoices" className="text-[#405DC7] text-md-regular font-bold">See All</a>
                     </div>
                     {/* <!-- Items Recent Invoices --> */}
                     <div className="w-full mt-6 rounded-lg h-auto">
                            <table className="text-blue-800 rounded-t-lg rounded-b-lg w-full">
                            {/* Table Head */}
                            <tr className="text-left border-b-2 border-indigo-300">
                                   <th className="px-4 py-3">ID</th>
                                   <th className="px-4 py-3">Tanggal</th>
                                   <th className="px-4 py-3">Klien</th>
                                   <th className="px-4 py-3">Jumlah</th>
                                   <th className="px-4 py-3">Status</th>
                            </tr>
                            {/* Render List Data Tables Components */}
                            <DataTables id={223} tanggal="25/12/2021" klien="Smith" jumlah={4456} status="Dibayar" />
                            <DataTables id={446} tanggal="08/11/2021" klien="Ferdian" jumlah={2214} status="Dibayar" />
                            <DataTables id={523} tanggal="23/10/2021" klien="Ahmad" jumlah={887} status="Tertunda" />
                            <DataTables id={723} tanggal="28/09/2021" klien="Rozikin" jumlah={3972} status="Dibayar" />
                            <DataTables id={283} tanggal="18/09/2021" klien="Fadhila" jumlah={1477} status="Tertunda" />
                            <DataTables id={223} tanggal="25/12/2021" klien="Smith" jumlah={4456} status="Dibayar" />
                            <DataTables id={446} tanggal="08/11/2021" klien="Ferdian" jumlah={2214} status="Dibayar" />
                            <DataTables id={523} tanggal="23/10/2021" klien="Ahmad" jumlah={887} status="Tertunda" />
                            </table>
                     </div>
              </React.Fragment>
       )
}

export default RecentInvoices
