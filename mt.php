<?php
    // 发送Header，表明是PNG文件
    header('content-type: image/png');
    
    // 设置源图片的路径并创建
    $src = 'http://mapgoogle.mapabc.com/googlechina/maptile?v=w2.60&' . $_SERVER["QUERY_STRING"];
    $image = imagecreatefromgif($src);
    
    
    // 需要被清除的颜色 数组
    $removedcollors = array(
                            imagecolorexact($image, 152, 178, 203),
                            imagecolorexact($image, 241, 238, 232),
                            imagecolorexact($image, 232, 227, 216),
                            imagecolorexact($image, 235, 230, 220),
                            imagecolorexact($image, 242, 239, 233)
                           );
    
    // 设定透明色
    $transparent = imagecolorallocate($image, 100, 100, 100);
    
    // 获取图片大小，以便逐点清除颜色
    $x = imagesx($image);
    $y = imagesy($image);
    
    // 清除颜色
    for($i = 0; $i<$x; $i++)
    {
        for($j = 0; $j<$y; $j++)
        {
            $color = imagecolorat($image, $i, $j);
            if(in_array($color, $removedcollors))
            {
                imagesetpixel($image, $i, $j, $transparent);
            }
        }
    }
    
    // 设置图片透明
    imagecolortransparent($image, $transparent);
    
    // 输出PNG图片
    imagepng($image);
    
    // 销毁图片资源
    imagedestroy($image);
?>
