import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Injector,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { ControlValueAccessor, FormControl, NgControl, NG_VALUE_ACCESSOR } from "@angular/forms";
import { FileService } from "@core/services/file/file.service";
import { FileUploadType } from "./enums/file-upload-type";

@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FileUploadComponent,
      multi: true,
    },
  ],
})
export class FileUploadComponent implements OnInit, AfterViewInit, ControlValueAccessor {
  @Output() fileRemoved: EventEmitter<any> = new EventEmitter<any>();
  @Output() fileUpload: EventEmitter<File> = new EventEmitter<File>();
  @Input() fileUploadType: FileUploadType; // circular or rectangular
  @Input() figCaption: string;
  @Input() folderName: string;
  @Input() enableRemove: false;
  @Input() file: any;
  @Input() enableUpload: boolean = true;

  fileSizeInKb: number;
  maxFileSizeInMB: number;
  fileExtension: string;
  errors: any = { invalidFileFormat: false, invalidFileSize: false };
  fileUploadTypeEnum = FileUploadType;

  onChange: Function;
  onTouched: Function;
  public control: FormControl;

  constructor(
    private host: ElementRef<HTMLInputElement>,
    private fileService: FileService,
    private injector: Injector,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const ngControl: NgControl = this.injector.get(NgControl, null);
    if (ngControl) {
      this.control = ngControl.control as FormControl;
      this.cdr.detectChanges();
    }
  }

  writeValue(value: null) {
    this.host.nativeElement.value = "";
  }

  registerOnChange(fn: Function) {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function) {
    this.onTouched = fn;
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      this.getFileDetails(event.target.files);
      if (this.control.valid) {
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (file) => {
          // this.url = file.target.result;
        };

        this.onFileUpload(event.target.files[0]);
      }
      this.errors = this.control.errors;
    }
  }

  onFileUpload(selectedFile: File) {
    if (selectedFile) {
      const params = {
        folderName: this.folderName,
      };
      const formData = new FormData();
      formData.append("file", selectedFile);
      this.fileService.uploadFile(formData, params).subscribe((file: any) => {
        file.data["fileSizeInKb"] = this.fileSizeInKb;
        file.data["fileExtension"] = this.fileExtension;
        this.onChange(file.data);
        this.fileUpload.emit(file.data);
      });
    }
  }

  getFileDetails(files: File[]) {
    if (files && files.length > 0) {
      this.fileSizeInKb = Math.round(files[0].size / 1024);
      this.fileExtension = files[0].name.split(".").pop().toLowerCase();
      const detail = {
        fileSizeInKb: this.fileSizeInKb,
        fileExtension: this.fileExtension,
      };
      this.onChange(detail);
    }
  }

  isPDF() {
    if (this.file && this.file.fileType) {
      if (this.file.fileType.toLowerCase() === "pdf") {
        return true;
      } else {
        return false;
      }
    } else {
      if (this.control && this.control.value && this.control.value.fileType) {
        return this.control.value.fileType.toLowerCase() === "pdf" ? true : false;
      } else {
        return false;
      }
    }
  }

  openPDF() {
    if (this.file) {
      window.open(this.file.largeFileUrl);
    } else {
      window.open(this.control.value.largeFileUrl);
    }
  }

  onRemoveFile() {
    this.fileRemoved.emit();
  }
}
