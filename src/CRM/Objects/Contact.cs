﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.CRM
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Contact.
    /// </summary>
    // *** Start programmer edit section *** (Contact CustomAttributes)

    // *** End programmer edit section *** (Contact CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ContactE", new string[] {
            "Name as \'Name\'",
            "Surname as \'Surname\'",
            "Telephone as \'Telephone\'",
            "Adress as \'Adress\'",
            "Gender as \'Gender\'",
            "Email as \'Email\'",
            "Company as \'Company\'",
            "Company as \'Company\'",
            "Company.Name as \'Name\'"}, Hidden=new string[] {
            "Company.Name"})]
    [MasterViewDefineAttribute("ContactE", "Company", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Name")]
    [View("ContactL", new string[] {
            "Name as \'Name\'",
            "Surname as \'Surname\'",
            "Telephone as \'Telephone\'",
            "Adress as \'Adress\'",
            "Gender as \'Gender\'",
            "Email as \'Email\'",
            "Company as \'Company\'",
            "Company.Name as \'Name\'"})]
    public class Contact : ICSSoft.STORMNET.DataObject
    {
        
        private string fName;
        
        private string fSurname;
        
        private string fTelephone;
        
        private string fAdress;
        
        private IIS.CRM.tGender fGender;
        
        private string fEmail;
        
        private IIS.CRM.Company fCompany;
        
        // *** Start programmer edit section *** (Contact CustomMembers)

        // *** End programmer edit section *** (Contact CustomMembers)

        
        /// <summary>
        /// Name.
        /// </summary>
        // *** Start programmer edit section *** (Contact.Name CustomAttributes)

        // *** End programmer edit section *** (Contact.Name CustomAttributes)
        [StrLen(255)]
        public virtual string Name
        {
            get
            {
                // *** Start programmer edit section *** (Contact.Name Get start)

                // *** End programmer edit section *** (Contact.Name Get start)
                string result = this.fName;
                // *** Start programmer edit section *** (Contact.Name Get end)

                // *** End programmer edit section *** (Contact.Name Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Contact.Name Set start)

                // *** End programmer edit section *** (Contact.Name Set start)
                this.fName = value;
                // *** Start programmer edit section *** (Contact.Name Set end)

                // *** End programmer edit section *** (Contact.Name Set end)
            }
        }
        
        /// <summary>
        /// Surname.
        /// </summary>
        // *** Start programmer edit section *** (Contact.Surname CustomAttributes)

        // *** End programmer edit section *** (Contact.Surname CustomAttributes)
        [StrLen(255)]
        public virtual string Surname
        {
            get
            {
                // *** Start programmer edit section *** (Contact.Surname Get start)

                // *** End programmer edit section *** (Contact.Surname Get start)
                string result = this.fSurname;
                // *** Start programmer edit section *** (Contact.Surname Get end)

                // *** End programmer edit section *** (Contact.Surname Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Contact.Surname Set start)

                // *** End programmer edit section *** (Contact.Surname Set start)
                this.fSurname = value;
                // *** Start programmer edit section *** (Contact.Surname Set end)

                // *** End programmer edit section *** (Contact.Surname Set end)
            }
        }
        
        /// <summary>
        /// Telephone.
        /// </summary>
        // *** Start programmer edit section *** (Contact.Telephone CustomAttributes)

        // *** End programmer edit section *** (Contact.Telephone CustomAttributes)
        [StrLen(255)]
        public virtual string Telephone
        {
            get
            {
                // *** Start programmer edit section *** (Contact.Telephone Get start)

                // *** End programmer edit section *** (Contact.Telephone Get start)
                string result = this.fTelephone;
                // *** Start programmer edit section *** (Contact.Telephone Get end)

                // *** End programmer edit section *** (Contact.Telephone Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Contact.Telephone Set start)

                // *** End programmer edit section *** (Contact.Telephone Set start)
                this.fTelephone = value;
                // *** Start programmer edit section *** (Contact.Telephone Set end)

                // *** End programmer edit section *** (Contact.Telephone Set end)
            }
        }
        
        /// <summary>
        /// Adress.
        /// </summary>
        // *** Start programmer edit section *** (Contact.Adress CustomAttributes)

        // *** End programmer edit section *** (Contact.Adress CustomAttributes)
        [StrLen(255)]
        public virtual string Adress
        {
            get
            {
                // *** Start programmer edit section *** (Contact.Adress Get start)

                // *** End programmer edit section *** (Contact.Adress Get start)
                string result = this.fAdress;
                // *** Start programmer edit section *** (Contact.Adress Get end)

                // *** End programmer edit section *** (Contact.Adress Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Contact.Adress Set start)

                // *** End programmer edit section *** (Contact.Adress Set start)
                this.fAdress = value;
                // *** Start programmer edit section *** (Contact.Adress Set end)

                // *** End programmer edit section *** (Contact.Adress Set end)
            }
        }
        
        /// <summary>
        /// Gender.
        /// </summary>
        // *** Start programmer edit section *** (Contact.Gender CustomAttributes)

        // *** End programmer edit section *** (Contact.Gender CustomAttributes)
        public virtual IIS.CRM.tGender Gender
        {
            get
            {
                // *** Start programmer edit section *** (Contact.Gender Get start)

                // *** End programmer edit section *** (Contact.Gender Get start)
                IIS.CRM.tGender result = this.fGender;
                // *** Start programmer edit section *** (Contact.Gender Get end)

                // *** End programmer edit section *** (Contact.Gender Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Contact.Gender Set start)

                // *** End programmer edit section *** (Contact.Gender Set start)
                this.fGender = value;
                // *** Start programmer edit section *** (Contact.Gender Set end)

                // *** End programmer edit section *** (Contact.Gender Set end)
            }
        }
        
        /// <summary>
        /// Email.
        /// </summary>
        // *** Start programmer edit section *** (Contact.Email CustomAttributes)

        // *** End programmer edit section *** (Contact.Email CustomAttributes)
        [StrLen(255)]
        public virtual string Email
        {
            get
            {
                // *** Start programmer edit section *** (Contact.Email Get start)

                // *** End programmer edit section *** (Contact.Email Get start)
                string result = this.fEmail;
                // *** Start programmer edit section *** (Contact.Email Get end)

                // *** End programmer edit section *** (Contact.Email Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Contact.Email Set start)

                // *** End programmer edit section *** (Contact.Email Set start)
                this.fEmail = value;
                // *** Start programmer edit section *** (Contact.Email Set end)

                // *** End programmer edit section *** (Contact.Email Set end)
            }
        }
        
        /// <summary>
        /// Contact.
        /// </summary>
        // *** Start programmer edit section *** (Contact.Company CustomAttributes)

        // *** End programmer edit section *** (Contact.Company CustomAttributes)
        [NotNull()]
        public virtual IIS.CRM.Company Company
        {
            get
            {
                // *** Start programmer edit section *** (Contact.Company Get start)

                // *** End programmer edit section *** (Contact.Company Get start)
                IIS.CRM.Company result = this.fCompany;
                // *** Start programmer edit section *** (Contact.Company Get end)

                // *** End programmer edit section *** (Contact.Company Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Contact.Company Set start)

                // *** End programmer edit section *** (Contact.Company Set start)
                this.fCompany = value;
                // *** Start programmer edit section *** (Contact.Company Set end)

                // *** End programmer edit section *** (Contact.Company Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ContactE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ContactE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ContactE", typeof(IIS.CRM.Contact));
                }
            }
            
            /// <summary>
            /// "ContactL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ContactL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ContactL", typeof(IIS.CRM.Contact));
                }
            }
        }
    }
}