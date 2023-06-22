const Profile = () => {
    return (
        <div className="bg-white rounded-lg p-6 w-[100%] overflow-auto flex flex-col gap-6">
            <h2 className="title-font text-[20px] text-[#3F4254] font-semibold">Profile</h2>
            <form className="w-full flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="text-[#3F4254] title-font font-semibold label-text">Username</span>
                        </label>
                        <input type="text" placeholder="username" className="input input-bordered w-full" value="adam" disabled />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="text-[#3F4254] title-font font-semibold label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered w-full" value="adam.smith@yahoo.com" disabled />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="text-[#3F4254] title-font font-semibold label-text">New Password</span>
                        </label>
                        <input type="password" id="password" name="password" placeholder="new password" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="text-[#3F4254] title-font font-semibold label-text">Re-enter Password</span>
                        </label>
                        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="re-enter password" className="input input-bordered w-full" />
                    </div>
                </div>
                <input className="button-primary self-start" type="submit" value="Update Password" />
            </form>
        </div>
    );
};

export default Profile;