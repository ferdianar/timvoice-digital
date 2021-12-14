import React from 'react'
import { NextPage } from 'next'
import Head from "next/head"

// import Dashboard Layouts
import DashboardLayouts from '../../../layouts/DashboardLayouts'

// Invoices Page
const Invoices: NextPage = () => {
       return (
              <React.Fragment>
                     <Head>
				<title>Invoices - Timvoice</title>
				<meta name="description" content="invoices invoice" />
				<meta httpEquiv="X-UA Compatible" content="IE-Edge" />
				<meta name="author" content="timvoice corp" />
			</Head>
                     <DashboardLayouts>
                            
                     </DashboardLayouts>
              </React.Fragment>
       )
}

export default Invoices
