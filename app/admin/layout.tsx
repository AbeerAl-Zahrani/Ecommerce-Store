import { Nav, NavLink } from "@/components/Nav";
//for admin cach
export const dynamic = 'force-dynamic'
export default function AdmainLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <Nav>
                <NavLink href='/admin'>Dashboard</NavLink>
                <NavLink href='/admin/products'>Products</NavLink>
                <NavLink href='/admin/users'>Customers</NavLink>
                <NavLink href='/admin/orders'>Sales</NavLink>

            </Nav>
            <div className="container my-6">{children}</div>
        </>
    )
}