import { AppSidebar } from "@/components/company/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset>
        <main className="flex-1 w-full bg-[#EBEBEB] p-3 md:p-4 lg:p-6 pb-20 md:pb-6">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AdminLayout;