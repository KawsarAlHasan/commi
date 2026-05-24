import { AppSidebar } from "@/components/company/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <main className="flex-1 w-full bg-[#EBEBEB] p-3 md:p-4 lg:p-6">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default AdminLayout;
