import { AppSidebar, SidebarToggleButton } from "@/components/user/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />

      <SidebarInset>
        {/* <header className="hidden md:flex items-center h-12 w-12 px-4 fixed top-0 z-10 bg-[#EBEBEB]">
          <SidebarToggleButton />
        </header> */}

        <main className="flex-1 w-full bg-[#EBEBEB] pb-20 md:pb-0">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AdminLayout;
