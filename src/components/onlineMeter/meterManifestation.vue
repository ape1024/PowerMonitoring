<template>
  <el-row class="meterManifestationElrow">
    <el-col :span="24" class="meterManifestationElcol">
      <Breadcrumb />
      <div class="meterManifestationSubject">
        <el-row :gutter="10">
          <el-col class="meterManifestationSubjectCol" :span="8">
            <div class="meterManifestationContent">
              <h4 class="meterManifestationContentTitle">
                北工大软件园A区配电室1#采集器
                <br />CJQ510040101
              </h4>
              <div class="meterManifestationTimeline">
                <div class="meterManifestationTimelineLeft meterManifestationTimelineLeftTwo">
                  <ul class="meterManifestationTimelineUl">
                    <li @click="tableClick" class="meterManifestationTimelineLi selectedStyle">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div
                        title="412-1:B1ATP1、2、3，B2ATP1、2消防风机"
                        class="meterManifestationTimelineText"
                      >412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                  </ul>
                </div>
                <div class="meterManifestationTimelineRight">
                  <ul class="meterManifestationTimelineUl">
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </el-col>
          <el-col class="meterManifestationSubjectCol" :span="8">
            <div class="meterManifestationContent">
              <h4 class="meterManifestationContentTitle">
                北工大软件园A区配电室1#采集器
                <br />CJQ510040101
              </h4>
              <div class="meterManifestationTimeline">
                <div class="meterManifestationTimelineLeft meterManifestationTimelineLeftTwo">
                  <ul class="meterManifestationTimelineUl">
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                  </ul>
                </div>
                <div class="meterManifestationTimelineRight">
                  <ul class="meterManifestationTimelineUl">
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </el-col>
          <el-col class="meterManifestationSubjectCol" :span="4">
            <div class="meterManifestationContent">
              <h4 class="meterManifestationContentTitle">
                北工大软件园A区配电室1#采集器
                <br />CJQ510040101
              </h4>
              <div class="meterManifestationTimeline">
                <div class="meterManifestationTimelineLeft">
                  <ul class="meterManifestationTimelineUl">
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </el-col>
          <el-col class="meterManifestationSubjectCol" :span="4">
            <div class="meterManifestationContent">
              <h4 class="meterManifestationContentTitle">
                北工大软件园A区配电室1#采集器
                <br />CJQ510040101
              </h4>
              <div class="meterManifestationTimeline">
                <div class="meterManifestationTimelineLeft">
                  <ul class="meterManifestationTimelineUl">
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </el-col>
          <el-col class="meterManifestationSubjectCol" :span="4">
            <div class="meterManifestationContent">
              <h4 class="meterManifestationContentTitle">
                北工大软件园A区配电室1#采集器
                <br />CJQ510040101
              </h4>
              <div class="meterManifestationTimeline">
                <div class="meterManifestationTimelineLeft">
                  <ul class="meterManifestationTimelineUl">
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </el-col>
          <el-col class="meterManifestationSubjectCol" :span="4">
            <div class="meterManifestationContent">
              <h4 class="meterManifestationContentTitle">
                北工大软件园A区配电室1#采集器
                <br />CJQ510040101
              </h4>
              <div class="meterManifestationTimeline">
                <div class="meterManifestationTimelineLeft">
                  <ul class="meterManifestationTimelineUl">
                    <li class="meterManifestationTimelineLi selectedStyle">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                    <li class="meterManifestationTimelineLi">
                      <div class="meterManifestationTimelineLine"></div>
                      <div class="meterManifestationTimelineDot"></div>
                      <div class="meterManifestationTimelineText">412-1:B1ATP1、2、3，B2ATP1、2消防风机</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
        <div class="meterManifestationButton">
          <el-button @click="getBackFn" size="large" type="primary">{{getBack}}</el-button>
        </div>
      </div>
      <div v-if="coverSiwth" class="coverLayer">
        <div class="coverLayerDiv">
          <vue-drag-resize :isResizable="false">
            <meterCoverLayer @close="closeFn" />
          </vue-drag-resize>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Breadcrumb from '../public/Breadcrumb.vue'
import meterCoverLayer from './meterCoverLayer.vue'

export default {
  name: 'meterManifestation',
  components: {
    Breadcrumb,
    meterCoverLayer
  },
  data() {
    return {
      getBack: '< 返回',
      coverSiwth: false,
      activities: [
        {
          content: '201:1#进线',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          color: 'red'
        }, {
          content: '201:1#进线',
          timestamp: '2018-04-03 20:46',
          color: 'red'
        }, {
          content: '201:1#进线',
          timestamp: '2018-04-03 20:46',
          size: 'large',
          color: 'red'
        }, {
          content: '201:1#进线',
          timestamp: '2018-04-03 20:46',
          color: 'red'
        }
      ],
      activitiesTwo: [
        {
          content: '201:1#进线',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          color: 'red'
        }, {
          content: '201:1#进线',
          timestamp: '2018-04-03 20:46',
          color: 'red'
        }, {
          content: '201:1#进线',
          timestamp: '2018-04-03 20:46',
          size: 'large',
          color: 'red'
        }, {
          content: '201:1#进线',
          timestamp: '2018-04-03 20:46',
          color: 'red'
        }, {
          content: '201:1#进线',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          color: 'red'
        }, {
          content: '201:1#进线',
          timestamp: '2018-04-03 20:46',
          color: 'red'
        }, {
          content: '201:1#进线',
          timestamp: '2018-04-03 20:46',
          size: 'large',
          color: 'red'
        }, {
          content: '201:1#进线',
          timestamp: '2018-04-03 20:46',
          color: 'red'
        }
      ],
      treeData: [
        {
          label: '一级 1'
        },
        {
          label: '一级 2'
        },
        {
          label: '一级 3'
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      tableData2: [
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  methods: {
    timelineitemFn(data) {
      console.log(data)
      this.coverSiwth = true
    },
    handleNodeClick(data) {
      console.log(data)
    },
    getBackFn() {
      this.$router.push('OnlineMeter')
    },
    closeFn() {
      this.coverSiwth = false
    },
    tableClick() {
      this.coverSiwth = true
    }
  },
  created() { }
}
</script>

<style scoped lang='stylus'>
@import '../../assets/css/base.styl'
.meterManifestationElrow
  Allborder()
  padding 6px
  box-sizing border-box
  background $background-color-White
  height 100%
.meterManifestationElcol
  height 100%
.meterManifestationSubject
  border-radius 6px
  margin 6px 0 0 !important
  padding 6px
  Allborder()
.coverLayer
  coverLayer()
.tableSpan
  cursor pointer
  color $font-color-Brand
  text-decoration underline
.meterManifestationContent
  overflow hidden
  Allborder()
.meterManifestationContentTitle
  font-weight normal
  text-align center
  font-size 16px
  color $font-color-white
  background $font-color-Brand
.meterManifestationTimeline
  overflow hidden
.meterManifestationSubjectCol
  margin-bottom 10px
.meterManifestationButton
  text-align right
.el-timeline-item__content
  cursor pointer
  color #337ab7
.meterManifestationTimelineUl
  overflow hidden
  display flex
  flex-wrap wrap
.meterManifestationTimelineLi
  width 100%
  line-height 26px
  display flex
  cursor pointer
.meterManifestationTimelineLine
  width 26px
  height 26px
  background url('../../assets/img/line_dash.png') 0 0 no-repeat
  background-size 52px 26px
.meterManifestationTimelineDot
  width 12px
  height 12px
  border-radius 50%
  text-align center
  vertical-align middle
  /* margin: 0 .1rem; */
  margin 6px
  background red
.meterManifestationTimelineText
  width 200px
  word-break keep-all
  white-space nowrap
  overflow hidden
  text-overflow ellipsis
  color #337ab7
.meterManifestationTimelineLeft
  width 100%
  overflow hidden
.meterManifestationTimelineLeftTwo
  width 50%
  float left
.meterManifestationTimelineRight
  width 50%
  float right
  overflow hidden
.meterManifestationTimelineUl li:last-child .meterManifestationTimelineLine
  background url('../../assets/img/line_dash.png') -18px 1px no-repeat
  background-size 52px 26px
.selectedStyle
  background-color #dfedf9
.coverLayerDiv
  position absolute
  top 100px
  left 50%
  margin-left -600px
</style>
